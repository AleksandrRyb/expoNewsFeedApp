import React, { Component } from 'react';
import { Container, Content} from 'native-base';
import { connect } from 'react-redux';
import DateTimePicker from "react-native-modal-datetime-picker";
import { FlatList,  TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

import NewsCard from '../components/NewsCard';



class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                        elevation: 0,
                        backgroundColor: navigation.getParam('barColor')
                    },
                    headerLeft: (
                        <Ionicons
                            onPress={() => navigation.openDrawer()}
                            name='ios-menu'
                            color='#fcf9ec'
                            size={32}
                            style={{
                                paddingLeft: 15,
                                }}
                        />
                    ),
                    headerRight: (
                        <Ionicons
                            onPress={navigation.getParam('dateTimePicker')}
                            name='ios-calendar'
                            color='#fcf9ec'
                            size={32}
                            style={{
                                paddingRight: 15,
                                }}
                        />
                    )
            };
  };

    state = {
        newsArr: [],
        dateFilter: '',
        isDateTimePickerVisible: false
    }


    componentDidMount() {
        this.fetchNews();
        this.props.navigation.setParams({dateTimePicker: this.showDateTimePicker})
        this.props.navigation.setParams({barColor: this.props.settings.theme})
    }

    componentDidUpdate(prevProps) {
        if(prevProps.settings.theme !== this.props.settings.theme) {
            this.props.navigation.setParams({barColor: this.props.settings.theme})
        }
    }

    fetchNews = async () => {
        var url = 'https://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2019-06-09&' +
            'sortBy=popularity&' +
            'apiKey=5003cc46aa3c42e6b598cebf9a7f137a';
        const response = await axios.get(url);
        let newArray = []
        if(this.props.settings.newsCount) {
            newArray = response.data.articles.filter((item, i) => i < this.props.settings.newsCount)
        } 
        this.setState({ newsArr: this.state.newsArr.concat(newArray)})
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({ dateFilter: date })
        this.hideDateTimePicker();
    };

    render() {
        const { newsArr, dateFilter } = this.state;
        return (
            <Container style={{
                flex: 1,
                backgroundColor: '#fcf9ec'
            }}>
                <Content style={{ margin: 10}}>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                    <FlatList 
                        data={newsArr.filter((news) => {
                            var publDate = new Date(news.publishedAt);
                            var fDate = new Date(dateFilter);
                            return !dateFilter || 
                                publDate.valueOf() > fDate.valueOf()
                        })}
                        renderItem={({ item, index }) => 
                            <TouchableOpacity
                                onPress={
                                    () => this.props.navigation.push('News', {
                                        news: item
                                    })
                                }
                                key={index}
                            >
                                <NewsCard
                                    title={item.title}
                                    image={item.urlToImage}
                                />
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.title}
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={2}
                    />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    settings: state
})

export default connect(mapStateToProps)(MainScreen)
