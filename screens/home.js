import React from "react";
import {
  Linking,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

import { THEME_COLORS } from "../constants/constants";
import { BEHAVIOR_COLORS } from "../constants/constants";

const Wrapper = styled.ScrollView`
  width: 100%;
  text-align: center;
`;

const HomeScreen = ({ navigation }) => {
  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  return (
    <Wrapper>
      <Image
        source={require("../assets/homeScreen/home_schoolkids.png")}
        style={{
          position: "absolute",
          width: imageWidth,
          height: imageHeight,
          resizeMode: "contain",
        }}
      />
      <Image
        source={require("../assets/homeScreen/home_vector.png")}
        style={{
          width: imageWidth,
          height: imageHeight,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          fontSize: 28,
          color: "black",
          position: "absolute",
          textAlign: "center", // Changed to center alignment
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto", // Removed margin auto
        }}
      >
        Welcome to ProudMe!
      </Text>
      <View style={{ margin: 10 }}>
        <Text>
          Welcome to the home page of Project ProudMe! Project ProudMe is an
          adolescent obesity prevention intervention based in Louisiana. Project
          ProudMe is led by Dr. Senlin Chen and his team.
        </Text>
        <Text>
          This website includes three main components of the intervention: SMART
          Goal-Setting (My Journal + Behavior Charts), ProudMe PE, and ProudMe
          Cafeteria.
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text>I. SMART Goal-Setting (“My Journal”)</Text>
        <Text>
          SMART Goal-Setting refers to setting goals that are specific,
          measurable, attainable/achievable, realistic, and timely or
          time-bound.
        </Text>
        <Text>
          Middle school students who are part of the Project ProudMe will be
          taught how to set SMART goals for their daily physical activity,
          screen-time, fruits/vegetables consumption, and sleep time.
        </Text>
        <Text>
          Each student will be instructed to register a ProudMe account using
          their email address and protect the account with a password.
        </Text>
        <Text>
          Each registered student will be asked to (1) sign in the ProudMe
          website (2) set SMART behavior goals regularly (e.g., at least 3 times
          per week) (3) track goal progress for each behavior (physical
          activity, screen time, F/V consumption, sleep time) (4) type their
          reflective thoughts to self-evaluate goal attainment (5) receive
          AI-generated feedback to make SMARTer goals in the future (6) review
          the Figures (under "Behavior Charts") to visualize progress and
          achievement.
        </Text>
        <Text>
          Each student, by interacting with the Project ProudMe website, will
          become mindful of their behavior goals and behavior engagement, in
          reference to the recommended levels of the behaviors.
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text>II. ProudMe PE Resources</Text>
        <Text>
          This website publishes important resources related to the ProudMe PE
          curriculum. This is a 12-lesson curriculum unit that educates middle
          school students important knowledge, skill, and disposition needed for
          adopting health-enhancing behaviors (more physical activity, less
          screen time, more fruits/vegetables, and get enough sleep).
        </Text>
        <Text>
          The website contains lesson plans for the curriculum unit that are
          accessible for teacher users. The demo videos and other resources are
          also available for teachers to conveniently teach the ProudMe PE
          lessons.
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text>III. ProudMe Cafeteria </Text>
        <Text>
          The ProudMe Cafeteria is designed to help schools make environmental
          and policy changes to their cafeterias. Our research team assesses the
          cafeterias using the Smarter Lunchroom Scorecard. We then offer
          specific training and support to the lunchroom staff within each
          school and assist them in making effective and efficient changes at
          the cafeteria.
        </Text>
        <Text>
          A healthy food environment empowers healthy eating. The ProudMe
          Cafeteria will promote healthier eating among students at the
          participating schools.
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text>
          For questions about the Project ProudMe, please contact Dr. Chen’s lab
          – the Pedagogical Kinesiology Lab (
          <Text
            onPress={() =>
              Linking.openURL(
                "mailto:pklab@lsu.edu?subject=Project%20ProudME%20Feedback"
              )
            }
          >
            pklab@lsu.edu
          </Text>
          ).
        </Text>
        <Text>
          If your school is interested in becoming a partnership school, our lab
          offers small grants as incentives for you to participate. Please
          contact Dr. Chen (
          <Text
            onPress={() =>
              Linking.openURL(
                "mailto:senlinchen@lsu.edu?subject=Project%20ProudME%20Partnership%20Request"
              )
            }
          >
            senlinchen@lsu.edu
          </Text>
          ). Thank you!
        </Text>
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
