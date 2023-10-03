import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import cabbage from "../assets/images/cabbage.jpeg";
import layoutStyle from "../assets/styles/Layout";
export default function Layout({ navigation, route }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 4 }}>
      <ScrollView>
        <View>
          <Text style={layoutStyle.produce}>{route.params.name}</Text>
          <Image source={cabbage} style={layoutStyle.headImage} />
        </View>
        <View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 8 }}
            >
              Description:
            </Text>
            <Text style={{ color: "gray" }}>
              Cabbage is a cool-season vegetable that is a member of the
              Brassica family. It is a popular vegetable in South Africa and is
              used in a variety of dishes, such as stews, salads, and wraps.
              Cabbage is a good source of fiber, vitamin C, and calcium. Cabbage
              plants have broad, green leaves that form a dense head. The head
              can be round, oval, or wedge-shaped. Cabbages come in a variety of
              sizes, from small to large. Cabbage is a relatively easy vegetable
              to grow. It prefers well-drained soil with plenty of organic
              matter. Cabbage plants should be fertilized regularly and watered
              as needed. Cabbages are typically harvested 90-110 days after
              transplanting.
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 8 }}
            >
              1. Preparation
            </Text>
            <Text>
              To prepare for growing cabbage, choose the right cultivar, prepare
              the soil, sow the seeds, transplant the seedlings, fertilize the
              plants, water the plants, and harvest the cabbages
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 8 }}
            >
              2. Ploughing
            </Text>
            <Text>
              To prepare the soil for cabbage planting, the field must be
              ploughed to a depth of 15-20 cm. This helps to break up any large
              clumps of soil and create a smooth and level seedbed. It also
              helps to remove weeds and debris, which can compete with the
              cabbage seedlings for nutrients and water. After ploughing, the
              field should be harrowed to further break up the soil and remove
              any remaining debris. The field should then be irrigated to help
              settle the soil and prepare it for planting.
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 8 }}
            >
              3. Leveling
            </Text>
            <Text>
              After ploughing, the field may be uneven, with bumps and dips.
              This can hinder the growth of cabbage seedlings, as they will not
              be able to establish themselves properly. Leveling the field
              ensures that the seedlings have a level surface to grow on, which
              will help them to develop strong roots and stems. To level the
              field, a harrow or roller can be used. The harrow is a tool with
              teeth that break up the soil and remove any debris. The roller is
              a smooth, heavy tool that is used to compact the soil and create a
              smooth surface. The goal is to create a field that is as level as
              possible. This may require multiple passes with the harrow or
              roller.
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 8 }}
            >
              4. Irrigation
            </Text>
            <Text>
              Irrigation is important for cabbage seedlings, as they need
              moisture to germinate and establish themselves. After leveling the
              field, it is important to irrigate the soil to help it settle and
              provide moisture for the seedlings. The field should be irrigated
              until the soil is moist but not soggy. Soggy soil can suffocate
              the seedlings and prevent them from growing properly. The best
              time to irrigate is in the morning, so that the seedlings have all
              day to dry out before nightfall.
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 8 }}
            >
              Pest and disease control
            </Text>
            <Text>
              - Inspect the crop regularly for pests and diseases. - Use organic
              pesticides whenever possible. - Only use pesticides when
              necessary.
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 8 }}
            >
              Creative tips
            </Text>
            <Text>
              - Grow cabbages in raised beds to improve drainage.- Mulch around
              the plants to help retain moisture and suppress weeds.- Interplant
              cabbages with other vegetables, such as tomatoes, carrots, and
              onions, to help deter pests.- Use companion planting to attract
              beneficial insects to the garden.- Experiment with different
              cultivars of cabbage to find ones that are suited to your climate
              and preferences.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
