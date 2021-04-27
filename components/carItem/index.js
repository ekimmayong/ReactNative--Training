import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

import StyledButton from '../styledButton';

const CarItem = (props) => {

    const {name, tagLine, tagLineCTA, image} = props.car
    return (
        <View style={styles.carContainer}> 
            <ImageBackground 
            source={image}
            style = {styles.images}
            />
            <View style={styles.titles}>

            <Text style = {styles.title}>{name}</Text>

            <Text 
                style={styles.subTitle}> {tagLine}{' '}
                <Text style={styles.subTitleCTA}>
                    {tagLineCTA}
                </Text>
            </Text>

            </View>

            <View style={styles.buttonContainer}>
                <StyledButton type="primary" 
                    content={"Custon Order"}
                    onPress={() => {
                    console.warn("custom pressed");
                }}/>


                <StyledButton type="secondary" 
                    content={"Existing Inventory"}
                    onPress={() => {
                    console.warn("Existing inventory was pressed");
                }}/>
            </View>
        </View>
    );
};

export default CarItem;