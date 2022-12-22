import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class workshop1 extends Component {
    render() {
        const { container, text, btnNum, groupBtn,display,btnNum0 } = styles
        var row0 = [];
        var row1 = [];
        var row2 = [];
        var row3 = [];
        var row4 = [];
        for (let i = 0; i < 19; i++) {
            if (i <= 2)
                row0.push(
                    <View style={i ==0 ? btnNum0 : btnNum}>
                        <Text style={text}>{i}</Text>
                    </View>
                );
            else if (i <= 6)
                row1.push(
                    <View style={btnNum}>
                        <Text style={text}>{i}</Text>
                    </View>
                );
            else if (i <= 10)
                row2.push(
                    <View style={btnNum}>
                        <Text style={text}>{i}</Text>
                    </View>
                );
            else if (i <= 14)
                row3.push(
                    <View style={btnNum}>
                        <Text style={text}>{i}</Text>
                    </View>
                );
            else
                row4.push(
                    <View style={btnNum}>
                        <Text style={text}>{i}</Text>
                    </View>
                );
        }
        return (
            <View style={container}>
                <View style={display}>
                    <Text style={text}>Hello World</Text>
                </View>
                
                <View style={groupBtn}>
                    {row4}
                </View>
                <View style={groupBtn}>
                    {row3}
                </View>
                <View style={groupBtn}>
                    {row2}
                </View>
                <View style={groupBtn}>
                    {row1}
                </View>
                <View style={groupBtn}>
                    {row0}
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color:'white',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    groupBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnNum0: {
        width: 150,
        height: 75,
        backgroundColor: 'gray',
        marginRight: 5,
        borderRadius: 75 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnNum: {
        width: 75,
        height: 75,
        backgroundColor: 'gray',
        marginRight: 5,
        borderRadius: 75 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },display:{
        width:330,
        height:120,
        backgroundColor:'black',
        alignItems:'flex-end',
        justifyContent: 'flex-end',
    }
});

export default workshop1