import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter_Reducer from "../components/ColorCounter_Reducer";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

  //state=== {red:number, green:number, blue:number}
  //action === {type: 'change_red' || type: 'change_green' || 'change_blue', payload:15}

  switch (action.type) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      } else {
        return { ...state, red: state.red + action.payload };
      }

    case "change_green":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      ) {
        return state;
      } else {
        return { ...state, green: state.green + action.amount };
      }
    case "change_blue":
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
        return state;
      } else {
        return { ...state, blue: state.blue + action.payload };
      }
    default:
      return state;
  }
};

const ColorSquareScreen_Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const {red,green,blue}=state

  return (
    <View>
      <ColorCounter_Reducer
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter_Reducer
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter_Reducer
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorSquareScreen_Reducer;
