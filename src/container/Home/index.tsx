import React,{ Component } from 'react';
import { FlatList, View, SafeAreaView, Image} from 'react-native';
import { CommonHeader } from '../../custom/CustomComponent'
import style from './style'
import * as color from '../../res/colors'


class Home extends Component{
    state={
        historyList:[
            {id:1,rate:'$150', image : require('../../res/drawable/pic_1.jpeg')},
            {id:2,rate:'$250', image : require('../../res/drawable/pic_2.jpeg')},
            {id:3,rate:'$350', image : require('../../res/drawable/pic_3.jpeg')},
            {id:4,rate:'$450', image : require('../../res/drawable/pic4.jpeg')},
            {id:5,rate:'$150', image : require('../../res/drawable/pic_1.jpeg')},
            {id:6,rate:'$250', image : require('../../res/drawable/pic_2.jpeg')},
            {id:7,rate:'$350', image : require('../../res/drawable/pic_3.jpeg')},
            {id:8,rate:'$450', image : require('../../res/drawable/pic4.jpeg')},
            {id:9,rate:'$150', image : require('../../res/drawable/pic_1.jpeg')},
            {id:10,rate:'$250', image : require('../../res/drawable/pic_2.jpeg')},
            {id:11,rate:'$350', image : require('../../res/drawable/pic_3.jpeg')},
            {id:12,rate:'$450', image : require('../../res/drawable/pic4.jpeg')},
            {id:13,rate:'$150', image : require('../../res/drawable/pic_1.jpeg')},
            {id:14,rate:'$250', image : require('../../res/drawable/pic_2.jpeg')},
            {id:15,rate:'$350', image : require('../../res/drawable/pic_3.jpeg')},
            {id:16,rate:'$450', image : require('../../res/drawable/pic4.jpeg')},
        ]
    }
    render(){
        return(
                <SafeAreaView style={{ backgroundColor:color.WHITE_COLOR,flex:1 }}>
                <CommonHeader
                // onClick = {() => this.props.navigation.navigate("")}
                style={style.header}
                title={"Home Gallery"}
                />

                 <FlatList
            style={{ width:'100%',backgroundColor: color.WHITE_COLOR }}
            data={this.state.historyList}
            renderItem={({ item, index }) => {

              return (
                  <View style={[style.cardView, { borderBottomWidth:1,}]}>
                      <Image
                      source = { item.image }
                      style={style.img}
                      />
                  </View>
                  
              )
            }
            }
            keyExtractor={item => item.id}
          />
                </SafeAreaView>
        )
    }
}

export default Home