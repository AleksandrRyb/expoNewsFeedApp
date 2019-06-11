import React, { Component } from 'react';
import {  Container, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class AboutScreen extends Component {

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

    componentDidMount() {
        this.props.navigation.setParams({barColor: this.props.settings.theme})
        
    }

    componentDidUpdate(prevProps) {
        if(prevProps.settings.theme !== this.props.settings.theme) {
            this.props.navigation.setParams({barColor: this.props.settings.theme})
        }
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#fcf9ec'}}>
                <Content style={{ margin: 10 }}>
                    <MapView 
                        style={{height: 300}}
                        initialRegion={{
                            latitude: 48.5027313,
                            longitude: 135.0662599,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }} 
                        
                    >
                        <MapView.Marker
                        coordinate={{
                            latitude: 48.5027313,
                            longitude: 135.0662599,
                        }}
                        title={"Работа"}
                        description={"Надеюсь получить работу здесь)"}
                        />
                    </MapView>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    settings: state
})

export default connect(mapStateToProps)(AboutScreen)
