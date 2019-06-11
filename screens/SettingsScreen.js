import React, { Component } from 'react';
import { Container,  Content, Form, Item, Picker, Icon, Button} from 'native-base';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { setSettings } from '../actions/index';

class SettingsScreen extends Component {

    

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

        };
    };

    state = {
        theme: '#67eaca',
        fontSize: '16',
        newsCount: '20'
    }

    componentDidMount() {
        console.log(this.props.settings.theme)
        if(this.props.settings.theme) {
            this.props.navigation.setParams({barColor: this.props.settings.theme})
        }
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.settings.theme !== this.props.settings.theme){
    //         this.props.navigation.setParams({barColor: this.props.settings.theme})
    //     }
    // }

    componentDidUpdate(prevProps) {
        if(prevProps.settings.theme !== this.props.settings.theme) {
            this.props.navigation.setParams({barColor: this.props.settings.theme})
        }
    }

    onValueChange1 = (value) => {
        this.setState({
            theme: value
        });
    }

    onValueChange2 = (value) => {
        this.setState({
            fontSize: value
        });
    }

    onValueChange3 = (value) => {
        this.setState({
            newsCount: value
        });
    }

    submitSettings = () => {
        const {theme, fontSize, newsCount } = this.state;
        this.props.setSettings(theme, parseFloat(fontSize), parseFloat(newsCount))
        this.props.navigation.push('Main')
    }

    render() {
        return (
            <Container  style={{ flex: 1, backgroundColor: '#fcf9ec' }}>
                <Content style={{ margin: 10 }}>
                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                name='theme'
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder='Выбери Тему'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.theme}
                                onValueChange={this.onValueChange1}
                            >
                                <Picker.Item label="Зелёная" value='#67eaca' />
                                <Picker.Item label="Розовая" value='#ff82c3' />
                            </Picker>
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                name='fontSize'
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder='Выбери Размер Шрифта'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.fontSize}
                                onValueChange={this.onValueChange2}
                            >
                                <Picker.Item label="16px" value='16' />
                                <Picker.Item label="20px" value='20' />
                            </Picker>
                        </Item>
                        <Item  picker>
                            <Picker
                                mode="dropdown"
                                name='newsCount'
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder='Выбери Колличество Статей'
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.newsCount}
                                onValueChange={this.onValueChange3}
                            >
                                <Picker.Item label="20 Статей" value='20' />
                                <Picker.Item label="10 Статей" value='10' />
                            </Picker>
                        </Item>
                        <Button onPress={this.submitSettings} block warning>
                            <Text style={{ color: 'white'}}>Подтвердить</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    settings: state
})

export default connect(mapStateToProps, { setSettings })(SettingsScreen)

