import * as React from 'react';
import '../../App.css'
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import {Controller} from 'react-hook-form'

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });



export default function MyTextField(props) {

    const {label, name, control} = props

    return (

      <Controller
        name = {name}
        control = {control}
        render = {({
          field : {onChange, value},
          fieldState : {error},
          formState, 

        }) => (

          <CacheProvider value={cacheRtl} >

            <TextField 
                id = "outlined-basic"
                onChange = {onChange}
                value = {value}
                label = {label}
                variant = "outlined"
                className={"myForm"}
                error = {!!error}
                helperText = {error?.message}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                  }
                }}  
            />

        </CacheProvider>

      )
      }
      />

        
    );
}
