import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

import CircleButton from "../components/Buttons/CircleButton";

import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import RectButton from "./Buttons/RectButton";

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
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
