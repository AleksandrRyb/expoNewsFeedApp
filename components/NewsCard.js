import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text } from 'native-base';

const NewsCard = ({ image, title }) => {
    return (
        <Card style={{
            position: 'relative',
            }}>
            <CardItem cardBody>
                <Image source={{ uri: image }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem> 
            <Text style={{
                position: 'absolute',
                top: '40%',
                left: '25%',
                color: '#fff',
                width: '70%'
            }}>{title}</Text>
        </Card>
    )
};

export default NewsCard;
