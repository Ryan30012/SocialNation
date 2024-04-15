'use server'
import React from 'react'
import Messaging from './form'
import path from "path";
import fs from "fs"
import { log } from "console";

    type Data = {
        // Define the structure of the data in your JSON file
        key: string;
        value: any;
    };

const Msg: React.FC = async () => {

  return (
    <>
        <Messaging />
    </>
  )
}

export default Msg