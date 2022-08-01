import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

import CircleButton from "../components/Buttons/CircleButton";

import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  const handlePress = () => {};

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ height: 250, width: "100%" }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <CircleButton
        imgUrl={assets.heart}
        right={10}
        top={10}
        handlePress={handlePress}
      />
      <SubInfo />
    </View>
  );
};

export default NFTCard;
