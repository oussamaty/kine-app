import * as React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

const MainFoodScreen: React.FC = () => {
  return (
    <View style={styles.FoodScreen}>
      <View style={styles.NavigationBottomBar}>
        <View style={styles.Layout}>
          <View style={styles.Home}>
            <Text>Home</Text>
            <Image
              style={styles.Icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33653%3A2904%3B33653%3A2625%3B33650%3A2338?alt=media&token=2f7a0441-ba98-4a44-86ee-37a30b795e57",
              }}
            />
          </View>
          <View style={styles.Food}>
            <Text>Food</Text>
            <Image
              style={styles.Icon1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33653%3A2904%3B33653%3A2626%3B33653%3A2577?alt=media&token=7adb6900-3977-4cfd-a696-eaa2119b610a",
              }}
            />
          </View>
          <View style={styles.Activity}>
            <Text>Activity</Text>
            <Image
              style={styles.Icon2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33653%3A2904%3B33653%3A2627%3B33650%3A2338?alt=media&token=5583c8f6-131b-4d2f-99f2-283685580d43",
              }}
            />
          </View>
          <View style={styles.MealPlan}>
            <Text>Meal Plan</Text>
            <Image
              style={styles.Icon3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33653%3A2904%3B33653%3A2628%3B33650%3A2338?alt=media&token=bedd5897-1ad3-4449-bdf6-c11c8779c1d7",
              }}
            />
          </View>
          <View style={styles.Profile}>
            <Text>Profile</Text>
            <Image
              style={styles.Icon4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33653%3A2904%3B33653%3A2629%3B33650%3A2338?alt=media&token=9f31ac3d-c15a-43cf-8026-465d4e9713c6",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.LogMeals}>
        <View style={styles.LogMeal}>
          <Image
            style={styles.Icon5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8252%3B33672%3A6866?alt=media&token=a81fd7fd-07f0-4162-b2ac-d2a8e2041435",
            }}
          />
          <View style={styles.Content1}>
            <View style={styles.Content}>
              <Text>🔔 09:00</Text>
              <Text>Breakfast</Text>
              <Text>286 Kcal out of 420 Kcal</Text>
            </View>
            <Image
              style={styles.Button}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8252%3B33672%3A6863?alt=media&token=3893d440-57b3-4c71-8296-abb14a5b812a",
              }}
            />
          </View>
        </View>
        <View style={styles.LogMeal1}>
          <Image
            style={styles.Icon6}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8266%3B33672%3A6866?alt=media&token=031675e0-f602-47c5-b1b1-b4f36dab17e9",
            }}
          />
          <View style={styles.Content3}>
            <View style={styles.Content2}>
              <Text>🔔 12:00</Text>
              <Text>Lunch</Text>
              <Text>286 Kcal out of 420 Kcal</Text>
            </View>
            <Image
              style={styles.Button1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8266%3B33672%3A6863?alt=media&token=3f04e732-3b5f-4ba4-8392-0321a7bb53e2",
              }}
            />
          </View>
        </View>
        <View style={styles.LogMeal2}>
          <Image
            style={styles.Icon7}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8280%3B33672%3A6866?alt=media&token=94d54b71-19a5-4ff1-91a7-abd71c166658",
            }}
          />
          <View style={styles.Content5}>
            <View style={styles.Content4}>
              <Text>🔔 20:00</Text>
              <Text>Dinner</Text>
              <Text>286 Kcal out of 420 Kcal</Text>
            </View>
            <Image
              style={styles.Button2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8280%3B33672%3A6863?alt=media&token=bbc6889b-4eda-46b1-9d5d-7b2b636ddfa7",
              }}
            />
          </View>
        </View>
        <View style={styles.LogMeal3}>
          <Image
            style={styles.Icon8}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8294%3B33672%3A6866?alt=media&token=aeeed519-490a-401a-b6be-4fc3f509a10c",
            }}
          />
          <View style={styles.Content7}>
            <View style={styles.Content6}>
              <Text>🔔 16:00</Text>
            </View>
            <Image
              style={styles.Button3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33686%3A8294%3B33672%3A6863?alt=media&token=5ab199f2-204d-4c09-a0fb-2cbd772d0c19",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.Hello1}>
        <Text>Hello,</Text>
        <Text>Maleen</Text>
      </View>
      <View style={styles.MainFood}>
        <View style={styles.Calories3}>
          <View style={styles.Left}>
            <Text>🍎 Left</Text>
            <Text>328 Kcal</Text>
          </View>
          <View style={styles.Progressbar}>
            <View style={styles.Progress1}>
              <Text>Kcal</Text>
              <Text>2750</Text>
            </View>
            <View style={styles.Dot} />
          </View>
          <View style={styles.Burned2}>
            <Text>🔥 Burned</Text>
            <Text>572 Kcal</Text>
          </View>
        </View>
        <View style={styles.Nutrients}>
          <View style={styles.Nutrient1}>
            <Text>103 mg</Text>
            <Image
              style={styles.Progressbar1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33666%3A6320%3B33666%3A6111%3B33666%3A6020?alt=media&token=63c7f2b1-5feb-48df-a5f5-b839927b50d6",
              }}
            />
            <Text>Fats</Text>
          </View>
          <View style={styles.Nutrient3}>
            <Text>94 mg</Text>
            <Image
              style={styles.Progressbar2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33666%3A6320%3B33666%3A6093%3B33666%3A6020?alt=media&token=95cb095e-b4e6-4ba8-9982-aaf96f2292ea",
              }}
            />
            <Text>Carbs</Text>
          </View>
          <View style={styles.Nutrient5}>
            <Text>75 mg</Text>
            <Image
              style={styles.Progressbar3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33666%3A6320%3B33666%3A6081%3B33666%3A6020?alt=media&token=f93b0eca-25fb-42f0-b11c-444f993d0dd1",
              }}
            />
            <Text>Protein</Text>
          </View>
        </View>
      </View>
      <View style={styles.DatesSlider}>
        <Image
          style={styles.IconsLargeLeft}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33674%3A7090%3B33674%3A7085?alt=media&token=4342bb29-e04c-408e-820a-deb4e82a3253",
          }}
        />
        <View style={styles.Weekdays}>
          <View style={styles.Monday}>
            <View style={styles.Date}>
              <Text>Mon</Text>
              <Text>12</Text>
              <View style={styles.Ellipse1} />
            </View>
          </View>
          <View style={styles.Tuesday}>
            <View style={styles.Date1}>
              <Text>Tue</Text>
              <Text>13</Text>
              <View style={styles.Ellipse1} />
            </View>
          </View>
          <View style={styles.Wednesday}>
            <View style={styles.Date2}>
              <Text>Wed</Text>
              <Text>14</Text>
              <View style={styles.Ellipse1} />
            </View>
          </View>
          <View style={styles.Thursday}>
            <View style={styles.Date3}>
              <Text>Thu</Text>
              <Text>15</Text>
              <View style={styles.Ellipse1} />
            </View>
          </View>
          <View style={styles.Friday}>
            <View style={styles.Date4}>
              <Text>Fri</Text>
              <Text>16</Text>
              <View style={styles.Ellipse1} />
            </View>
          </View>
          <View style={styles.Saturday}>
            <View style={styles.Date5}>
              <Text>Sat</Text>
              <Text>17</Text>
              <View style={styles.Ellipse1} />
            </View>
          </View>
          <View style={styles.Sunday}>
            <View style={styles.Date6}>
              <Text>Sun</Text>
              <Text>18</Text>
              <View style={styles.Ellipse1} />
            </View>
          </View>
        </View>
        <Image
          style={styles.IconsLargeRight}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/7ie9gq4o9u-I33674%3A7090%3B33674%3A7087?alt=media&token=9bb724bb-3123-43ca-8e33-77458a734418",
          }}
        />
      </View>
    </View>
  )
};

export default MainFoodScreen;

const styles = StyleSheet.create({
  FoodScreen: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 430,
    height: 932,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  NavigationBottomBar: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 29,
    paddingBottom: 30,
    boxSizing: "border-box",
    backgroundColor: "rgba(52,58,64,1)",
  },
  Layout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Home: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: "100%",
    marginRight: 63,
    boxSizing: "border-box",
  },
  Text: {
    position: "absolute",
    top: 25,
    left: -1.82,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "14px",
    lineHeight: "129%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Icon: {
    position: "absolute",
    top: -7,
    left: 2,
    width: 32,
    height: 32,
  },
  Food: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: "100%",
    marginRight: 63,
    boxSizing: "border-box",
  },
  Text1: {
    position: "absolute",
    top: 25,
    left: 1.48,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(247,160,114,1)",
    fontSize: "14px",
    lineHeight: "129%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Icon1: {
    position: "absolute",
    top: -7,
    left: 2,
    width: 32,
    height: 32,
  },
  Activity: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: "100%",
    marginRight: 63,
    boxSizing: "border-box",
  },
  Text2: {
    position: "absolute",
    top: 25,
    left: -8.06,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "14px",
    lineHeight: "129%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Icon2: {
    position: "absolute",
    top: -7,
    left: 2,
    width: 32,
    height: 32,
  },
  MealPlan: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: "100%",
    marginRight: 63,
    boxSizing: "border-box",
  },
  Text3: {
    position: "absolute",
    top: 25,
    left: -14.3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "14px",
    lineHeight: "129%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Icon3: {
    position: "absolute",
    top: -7,
    left: 2,
    width: 32,
    height: 32,
  },
  Profile: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: "100%",
    boxSizing: "border-box",
  },
  Text4: {
    position: "absolute",
    top: 25,
    left: -3.54,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "14px",
    lineHeight: "129%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    textAlign: "center",
  },
  Icon4: {
    position: "absolute",
    top: -7,
    left: 2,
    width: 32,
    height: 32,
  },
  LogMeals: {
    position: "absolute",
    top: 545,
    left: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    height: 448,
    marginRight: 20,
    boxSizing: "border-box",
  },
  LogMeal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 100,
    marginRight: 16,
    paddingLeft: 8,
    borderWidth: 2,
    borderColor: "rgba(33,25,81,1)",
    borderRadius: 16,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Icon5: {
    width: 72,
    height: 72,
    marginRight: 10,
  },
  Content1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    height: "100%",
    paddingRight: 10,
    boxSizing: "border-box",
  },
  Content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 57,
    padding: 8,
    boxSizing: "border-box",
  },
  Time: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Meal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(33,25,81,1)",
    fontSize: "22px",
    lineHeight: "127%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Calories: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Button: {
    width: 50,
    height: 50,
  },
  LogMeal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 100,
    marginRight: 16,
    paddingLeft: 8,
    borderWidth: 2,
    borderColor: "rgba(33,25,81,1)",
    borderRadius: 16,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Icon6: {
    width: 72,
    height: 72,
    marginRight: 10,
  },
  Content3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    height: "100%",
    paddingRight: 10,
    boxSizing: "border-box",
  },
  Content2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 57,
    padding: 8,
    boxSizing: "border-box",
  },
  Time1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Meal3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(33,25,81,1)",
    fontSize: "22px",
    lineHeight: "127%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Calories1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Button1: {
    width: 50,
    height: 50,
  },
  LogMeal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 100,
    marginRight: 16,
    paddingLeft: 8,
    borderWidth: 2,
    borderColor: "rgba(33,25,81,1)",
    borderRadius: 16,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Icon7: {
    width: 72,
    height: 72,
    marginRight: 10,
  },
  Content5: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    height: "100%",
    paddingRight: 10,
    boxSizing: "border-box",
  },
  Content4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 57,
    padding: 8,
    boxSizing: "border-box",
  },
  Time2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Meal5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(33,25,81,1)",
    fontSize: "22px",
    lineHeight: "127%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Calories2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Button2: {
    width: 50,
    height: 50,
  },
  LogMeal3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 100,
    paddingLeft: 8,
    borderWidth: 2,
    borderColor: "rgba(33,25,81,1)",
    borderRadius: 16,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Icon8: {
    width: 72,
    height: 72,
    marginRight: 10,
  },
  Content7: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    height: "100%",
    paddingRight: 10,
    boxSizing: "border-box",
  },
  Content6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 57,
    padding: 8,
    boxSizing: "border-box",
  },
  Time3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Button3: {
    width: 50,
    height: 50,
  },
  Hello1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: 60,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: "border-box",
  },
  Hello: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "22px",
    lineHeight: "127%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Maleen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  MainFood: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginRight: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 18,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(33,25,81,1)",
    borderRadius: 25,
    boxSizing: "border-box",
  },
  Calories3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    boxSizing: "border-box",
  },
  Left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginRight: 23,
    boxSizing: "border-box",
  },
  Text5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Burned: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Progressbar: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 23,
    boxSizing: "border-box",
  },
  Progress1: {
    position: "absolute",
    top: "34.62%",
    bottom: "28.76%",
    left: "-1.25%",
    right: "-1.25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 164,
    height: 58.59,
    boxSizing: "border-box",
  },
  Unit: {
    position: "absolute",
    top: 31.09,
    left: 57,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "18px",
    lineHeight: "156%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "0.4px",
    textTransform: "uppercase",
  },
  Progress: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 5,
    color: "rgba(33,25,81,1)",
    fontSize: "36px",
    lineHeight: "100%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Dot: {
    position: "absolute",
    top: 22,
    left: 22,
    width: 116,
    height: 116,
    borderWidth: 3,
    borderColor: "rgba(222,226,230,1)",
    borderRadius: 58,
  },
  Burned2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
  },
  Text6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Burned1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Nutrients: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 65,
    boxSizing: "border-box",
  },
  Nutrient1: {
    position: "absolute",
    top: -7.5,
    left: 257,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: 110,
    height: 80,
    padding: 5,
    borderRadius: 100,
    boxSizing: "border-box",
  },
  Progress3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 25,
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Progressbar1: {
    width: "100%",
    height: 1,
    marginRight: 25,
  },
  Nutrient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Nutrient3: {
    position: "absolute",
    top: -7.5,
    left: 135,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: 110,
    height: 80,
    marginRight: 12,
    padding: 5,
    borderRadius: 100,
    boxSizing: "border-box",
  },
  Progress5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 25,
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Progressbar2: {
    width: "100%",
    height: 1,
    marginRight: 25,
  },
  Nutrient2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  Nutrient5: {
    position: "absolute",
    top: -7.5,
    left: 13,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: 110,
    height: 80,
    marginRight: 12,
    padding: 5,
    borderRadius: 100,
    boxSizing: "border-box",
  },
  Progress7: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 25,
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  Progressbar3: {
    width: "100%",
    height: 1,
    marginRight: 25,
  },
  Nutrient4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(33,25,81,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    textAlign: "center",
  },
  DatesSlider: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 110,
    marginRight: 20,
    padding: 5,
    boxSizing: "border-box",
  },
  IconsLargeLeft: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Weekdays: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 380,
    height: 90,
    marginRight: 10,
    boxSizing: "border-box",
  },
  Monday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 10,
    boxSizing: "border-box",
  },
  Date: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Thu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(0,0,0,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  _15: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(0,0,0,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Ellipse1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(234,179,8,1)",
  },
  Tuesday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 10,
    boxSizing: "border-box",
  },
  Date1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Thu1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(0,0,0,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  _151: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(0,0,0,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Ellipse11: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(234,179,8,1)",
  },
  Wednesday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 10,
    boxSizing: "border-box",
  },
  Date2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Thu2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(0,0,0,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  _152: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(0,0,0,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Ellipse12: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(234,179,8,1)",
  },
  Thursday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 10,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(33,25,81,1)",
  },
  Date3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Thu3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(255,255,255,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  _153: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(255,255,255,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Ellipse13: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Friday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 10,
    boxSizing: "border-box",
  },
  Date4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Thu5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(173,181,189,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  _154: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(173,181,189,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Ellipse14: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(206,212,218,1)",
  },
  Saturday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 10,
    boxSizing: "border-box",
  },
  Date5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Thu6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(173,181,189,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  _155: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(173,181,189,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Ellipse15: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(206,212,218,1)",
  },
  Sunday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    boxSizing: "border-box",
  },
  Date6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Thu7: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(173,181,189,1)",
    fontSize: "16px",
    lineHeight: "150%",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  _156: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 10,
    color: "rgba(173,181,189,1)",
    fontSize: "28px",
    lineHeight: "100%",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "800",
    textAlign: "center",
  },
  Ellipse16: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(206,212,218,1)",
  },
  IconsLargeRight: {
    width: 20,
    height: 20,
  },
})
