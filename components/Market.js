import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import marketStyles from "../assets/styles/Market";
import fertilizer from "../assets/images/fetilizers.jpg";
import equipment from "../assets/images/equipment.jpg";
import seedlings from "../assets/images/seedlings.jpg";
import tractor from "../assets/images/tractor.jpg";
import pesticides from "../assets/images/pesticides.jpg";

export default function Market() {
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={marketStyles.head}>
        <Text>Head</Text>
      </View> */}
      <ScrollView>
        <View style={marketStyles.catalogue}>
          <View style={marketStyles.product}>
            <Image source={fertilizer} style={marketStyles.itemImage} />
            <Text style={marketStyles.priceTag}>R 99.99</Text>
          </View>
          <View style={marketStyles.product}>
            <Image source={equipment} style={marketStyles.itemImage} />
            <Text style={marketStyles.priceTag}>R 99.99</Text>
          </View>
          <View style={marketStyles.product}>
            <Image source={seedlings} style={marketStyles.itemImage} />
            <Text style={marketStyles.priceTag}>R 99.99</Text>
          </View>
          <View style={marketStyles.product}>
            <Image source={tractor} style={marketStyles.itemImage} />
            <Text style={marketStyles.priceTag}>R 99.99</Text>
          </View>
          <View style={marketStyles.product}>
            <Image source={pesticides} style={marketStyles.itemImage} />
            <Text style={marketStyles.priceTag}>R 99.99</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
