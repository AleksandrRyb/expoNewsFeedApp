import React, { Component } from 'react';
import { Text, Container, Content  } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';


class HelpScreen extends Component {

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
                <Content style={{ margin: 10, }}>
                    <Text style={{ color: '#33313b', fontSize: this.props.settings.fontSize}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas quae commodi ratione quis, dolor maxime? Sit culpa quibusdam exercitationem, deleniti, soluta aspernatur labore beatae quidem ex ipsa iure dolores adipisci perspiciatis veniam, maxime in voluptatem? Reiciendis repellendus, quos velit molestiae doloremque, eveniet beatae rerum placeat ea veniam deleniti nesciunt assumenda tempore, quibusdam ut facilis odio! Error dignissimos asperiores veniam voluptatem facere consequatur! Blanditiis, rem? Unde aliquid laboriosam necessitatibus facere odit illo, nesciunt veniam impedit nulla, hic quae culpa perspiciatis minus omnis voluptas? Provident labore ut molestiae eveniet odit libero officiis voluptas, voluptatum nemo, unde incidunt officia? Earum, suscipit incidunt.
                    </Text>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    settings: state
})

export default connect(mapStateToProps)(HelpScreen)
