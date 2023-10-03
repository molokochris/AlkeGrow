import {
  View,
  Text,
  Button,
  Pressable,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import homeStyles from "../assets/styles/Home";
import home from "../assets/images/icons/Exterior.png";
import market from "../assets/images/icons/market.png";
import chat from "../assets/images/icons/Chat.png";
import profile from "../assets/images/icons/Customer.png";
import cabs from "../assets/images/cabbage.jpeg";
import spinach from "../assets/images/spinach.jpg";
import tomatoes from "../assets/images/tomatoes.webp";
import potatoes from "../assets/images/potatoes.jpg";
import bell from "../assets/images/icons/Bell.png";
// import homeStyles from "../assets/styles/Home";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle={"dark-content"} />
        <ScrollView>
          <View style={homeStyles.head}>
            {/* <Text style={homeStyles.logo}>AlkeGrowth</Text> */}
            <View style={homeStyles.headContent}>
              {/* <Text>Sidemenu</Text> */}
            </View>
            <View style={[homeStyles.headContent, { alignItems: "flex-end" }]}>
              <Image source={bell} style={{ width: 35, height: 35 }} />
            </View>
          </View>
          <View style={homeStyles.content}>
            {/* <View style={homeStyles.popular}>
              <Text>Popular Offerings:</Text>
            </View> */}
            <View style={homeStyles.education}>
              <Pressable
                onPress={() =>
                  navigation.navigate("layout", { name: "cabbage" })
                }
              >
                <Image source={cabs} style={homeStyles.tab} />
              </Pressable>
              <Image source={spinach} style={homeStyles.tab} />
              <Image source={tomatoes} style={homeStyles.tab} />
              <Image source={potatoes} style={homeStyles.tab} />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={homeStyles.navigation}>
        <Pressable
          style={homeStyles.navBtn}
          onPress={() => navigation.navigate("home")}
        >
          <Image source={home} style={{ width: 40, height: 40 }} />
        </Pressable>
        <Pressable
          style={homeStyles.navBtn}
          onPress={() => navigation.navigate("market")}
        >
          <Image source={market} style={{ width: 40, height: 40 }} />
        </Pressable>
        <Pressable
          style={homeStyles.navBtn}
          onPress={() => navigation.navigate("chat")}
        >
          <Image source={chat} style={{ width: 40, height: 40 }} />
        </Pressable>
        <Pressable
          style={homeStyles.navBtn}
          onPress={() => navigation.navigate("profile")}
        >
          <Image source={profile} style={{ width: 40, height: 40 }} />
        </Pressable>
      </View>
    </View>
  );
}
