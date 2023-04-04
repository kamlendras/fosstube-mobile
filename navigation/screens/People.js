import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import {  Chip } from "@react-native-material/core";
import { HStack, VStack } from 'react-native-flex-layout';
// import Icon from '@expo/vector-icons/Ionicons';
// import Icon2 from '@expo/vector-icons/Fontisto';
// import Icon3 from '@expo/vector-icons/MaterialCommunityIcons';
import { Stack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {  Avatar } from "@react-native-material/core";
import JS from '../../assets/JS.svg';
import CSharp from '../../assets/CSharp.svg';
import CPlusPlus from '../../assets/CPlusPlus.svg';
import CSS from '../../assets/CSS.svg';
import HTML from '../../assets/HTML.svg';
import Java from '../../assets/Java.svg';
import SQL from '../../assets/SQL.svg';
import TS from '../../assets/TS.svg';
import Shell from '../../assets/Shell.svg';
import Explore from '../../assets/explore.svg';
import Python from '../../assets/Python.svg';
import Cardbeta from './Cardbeta';
import { Spacer } from 'react-native-flex-layout';

export default function People({ navigation }) {
   return (
      <>
         <HStack m={2} spacing={10} style={{ flexDirection: "row" }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />
            <Queue size={16} />
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />
            <Queue size={16} />
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />

            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />
            <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={72} />

            {/* <Chip color="#2C96FF"
                  leading={props => <Explore width={26} height={26}{...props} />} />
               <Chip
                  label="JavaScript" color="#FFB600" leading={props => <JS width={26} height={26}{...props} />} />
               <Chip label="HTML" color="#FC490B"
                  leading={props => <HTML width={26} height={26}{...props} />} />
               <Chip label="CSS" color="#2196F3"
                  leading={props => <CSS width={26} height={26}{...props} />} />
               <Chip label="SQL" color="#2196F3"
                  leading={props => <SQL width={26} height={26}{...props} />} />
               <Chip label="Python" color="#306998"
                  leading={props => <Python width={26} height={26}{...props} />} />
               <Chip label="TypeScript" color="#3178C6"
                  leading={props => <TS width={26} height={26}{...props} />} />
               <Chip label="Java" color="#73A1FB"
                  leading={props => <Java width={26} height={26}{...props} />} />
               <Chip color="#B14796"
                  leading={props => <CSharp width={26} height={26}{...props} />} />
               <Chip label="Bash / Shell" color="#3B82F6"
                  leading={props => <Shell width={26} height={26}{...props} />} />
               <Chip color="#659AD2"
                  leading={props => <CPlusPlus width={26} height={26}{...props} />} /> */}
               {/* <Chip variant="outlined" label="Outlined" /> */}
            </ScrollView>
         </HStack>
         <ScrollView vertical={true} showsVerticalScrollIndicator={false} >
            <Cardbeta />
            <Cardbeta />
            <Cardbeta />
            <Cardbeta />
         </ScrollView>
      </>


   );
}