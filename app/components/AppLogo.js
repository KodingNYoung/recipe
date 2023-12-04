import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgXml } from "react-native-svg";
import logoSVG from "../assets/brand/logo-black.js";

export default function AppLogo() {
  return (
      <SvgXml
          xml={logoSVG}
          width={70}
          height={60}
        />
  )
}

const styles = StyleSheet.create({})