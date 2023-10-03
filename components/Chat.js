import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import chatStyles from "../assets/styles/Chat";

export default function Chat() {
  const [picked, setPicked] = useState(false);
  return (
    <View style={chatStyles.container}>
      <View style={chatStyles.head}>
        <Pressable style={chatStyles.tab} onPress={() => setPicked(true)}>
          <Text>Direct</Text>
        </Pressable>
        <Pressable style={chatStyles.tab} onPress={() => setPicked(false)}>
          <Text>Forum</Text>
        </Pressable>
      </View>
      <View style={chatStyles.chats}>
        <ScrollView>
          {picked ? (
            <View>
              <View style={chatStyles.profile}>
                <View style={chatStyles.profImage}></View>
                <View style={chatStyles.nameTab}>
                  <Text>Name + Surname</Text>
                </View>
              </View>
              <View style={chatStyles.profile}>
                <View style={chatStyles.profImage}></View>
                <View style={chatStyles.nameTab}>
                  <Text>Name + Surname</Text>
                </View>
              </View>
              <View style={chatStyles.profile}>
                <View style={chatStyles.profImage}></View>
                <View style={chatStyles.nameTab}>
                  <Text>Name + Surname</Text>
                </View>
              </View>
              <View style={chatStyles.profile}>
                <View style={chatStyles.profImage}></View>
                <View style={chatStyles.nameTab}>
                  <Text>Name + Surname</Text>
                </View>
              </View>
              <View style={chatStyles.profile}>
                <View style={chatStyles.profImage}></View>
                <View style={chatStyles.nameTab}>
                  <Text>Name + Surname</Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <View>
                <Text>Forum</Text>
                <View style={chatStyles.profile}>
                  <View style={chatStyles.profImage}></View>
                  <View style={chatStyles.nameTab}>
                    <Text>Name + Surname</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
