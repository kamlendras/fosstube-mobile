import * as React from 'react';
import { View, Text , ScrollView,Image } from 'react-native';
import { Stack, Chip } from "@react-native-material/core";
import {  HStack, VStack } from 'react-native-flex-layout';
import Icon from  '@expo/vector-icons/Ionicons';
import Icon2 from '@expo/vector-icons/Fontisto'; 
import Icon3 from '@expo/vector-icons/MaterialCommunityIcons';
import JS from '../../assets/JS.svg';
import CSharp from '../../assets/CSharp.svg';
import CPlusPlus from '../../assets/CPlusPlus.svg';
import CSS from '../../assets/CSS.svg';
import HTML from '../../assets/HTML.svg';
import Java from '../../assets/Java.svg';
import SQL from '../../assets/SQL.svg';
import TS from '../../assets/TS.svg';
import Shell from '../../assets/Shell.svg';
import Python from '../../assets/Python.svg';
import Cardbeta from './Cardbeta';
export default function Home({ navigation }) {
    return ( 
       <>
       <HStack  m={4} spacing={4}>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       
      <Chip 
       label="JavaScript"  color="black" leading={props =><JS width={26} height={26}{...props} />}/>
        {/* <Icon name="md-logo-javascript"  />}  /> */}
      
     
      
     
      <Chip label="HTML"  color="#5d4037"
      leading={props => <HTML width={26} height={26}{...props} />}/>
      <Chip label="CSS"  color="lightblue"
      leading={props => <CSS width={26} height={26}{...props} />}/>
       <Chip label="SQL"  color="#00758F"
      leading={props => <SQL width={26} height={26}{...props}/>}/>
       <Chip label="Python"  color="primary"
      leading={props => <Python width={26} height={26}{...props} />}/>
         <Chip label="TypeScript"  color="primary"
      leading={props => <TS width={26} height={26}{...props} />}/>
         <Chip label="Java"  color="primary"
      leading={props => <Java width={26} height={26}{...props} />}/>
         <Chip  color="primary"
      leading={props => <CSharp width={26} height={26}{...props} />}/>
         <Chip label="Bash / Shell"  color="primary"
      leading={props => <Shell width={26} height={26}{...props} />}/>
         <Chip   color="primary"
      leading={props => <CPlusPlus width={26} height={26}{...props}/>}/>
    {/* <Chip variant="outlined" label="Outlined" /> */}
    </ScrollView>
  </HStack>
  <ScrollView vertical={true} showsVerticalScrollIndicator={false} >
  <Cardbeta/>
  <Cardbeta/>
  <Cardbeta/>
  <Cardbeta/>
  </ScrollView>
  </>
      
       
    );
}