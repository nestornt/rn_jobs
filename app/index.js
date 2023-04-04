import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleLoaded = () => {
    setIsLoaded(true);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen 
        options={{ 
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={ icons.menu } dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={ images.profile } dimension="90%" />
          ),
          headerTitle: ""
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome />
          <Popularjobs handleLoaded={handleLoaded} setData={setData}/>
          {data && <Nearbyjobs data={data}/>}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;