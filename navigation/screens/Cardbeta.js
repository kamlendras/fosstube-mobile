import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="account-circle-outline" />

const MyComponent = () => (
  <Card>
  
    
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      {/* <Title>5 Most Dangerous Animals on Planet. </Title> */}
      {/* <Paragraph>Card content</Paragraph> */}
    </Card.Content>
    <Card.Title title="Scam 1992 New Movie 2023 |
     New Bollywood Action Hindi Movie 2023 | Ne.." subtitle="Axel Music 2 lakh views 10 hours ago" left={LeftContent} />
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
);

export default MyComponent;