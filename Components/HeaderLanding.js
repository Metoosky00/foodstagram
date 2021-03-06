import React from "react";
import { Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from "native-base";
import styles from "../Styles/Components/HeaderLandingStyles";
import { Link } from "react-router-native";

export default class HeaderLanding extends React.Component {
  render() {
    return (
      <Container style={styles.HeaderLandingContainer}>
        <Header style={styles.HeaderContainer}>
          <Left style={styles.Left}>
            <Button transparent onPress={() => this.props.openDrawer()}>
              <Icon style={styles.icon} name="ios-menu" />
            </Button>
          </Left>
          <Body style={styles.Body}>
            <Text style={styles.titleText}>Foodstagram</Text>
          </Body>
          <Right style={styles.Right}>
            <Button transparent>
              <Link to="/Cart">
                <Icon
                  style={styles.icon}
                  type={"FontAwesome5"}
                  name="shopping-cart"
                />
              </Link>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
