import React from 'react';
import { Text, Container, Content } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

class NewsScreen extends React.Component {
   
    static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('news').source.name,
        headerStyle: {
                    elevation: 0,
                    backgroundColor: navigation.getParam('barColor')
                },
        headerTintColor:'#f6f5f5',
        headerLeft: (
            <Ionicons
                onPress={() => navigation.goBack()}
                name='ios-arrow-back'
                color='#fcf9ec'
                size={32}
                style={{
                    paddingLeft: 15,
                    }}
            />
        )
        };
  };

    componentDidMount() {
            this.props.navigation.setParams({barColor: this.props.settings.theme})
        }

    componentDidUpdate(prevProps) {
        if(prevProps.settings.theme !== this.props.settings.theme) {
            this.props.navigation.setParams({barColor: this.props.settings.theme})
        }
    }


    render() {
        const { navigation } = this.props;
        const { author, content, urlToImage, title, description } = navigation.getParam('news');
        return (
            <Container style={styles.container}>
                <Content style={styles.contentHeader}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.author}>&#169; {author}</Text>
                    <Image source={{ uri: urlToImage}} style={styles.image} />
                    <Text style={styles.content, {
                        fontSize: this.props.settings.fontSize
                    }}>{content}</Text>
                </Content>
            </Container>
        )
    }
};

const mapStateToProps = state => ({
    settings: state
})

export default connect(mapStateToProps)(NewsScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf9ec',
    },
    contentHeader: {
        margin: 10,
        maxWidth: 370
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#33313b',
        paddingBottom: 5
    },
    description: {
        fontSize: 16,
        fontWeight: '200',
        color: '#89a3b2',
    },
    author: {
        alignSelf: 'flex-end',
        paddingBottom: 25
    },
    content: {
        fontWeight: '100',
        color: '#33313b',
        paddingTop: 12
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    }
})