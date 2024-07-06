import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Contact from './Contact';

const ContactData = () =>{

    return (
      <ScrollView style= {styles.container} >
        <Contact
          foto={require("../assets/lesti.jpeg")}
          name="Lesti Kejora"
          telpon="081234567890"
          job="Penyanyi"
          Hobi="Bernyanyi"
        />
        <Contact
          foto={require("../assets/billar.jpg")}
          name="Rizki Billar"
          telpon="089876543216"
          job="Artis"
          Hobi="Mancing"
            />
        <Contact
          foto={require("../assets/roro_kidul.jpeg")}
          name="Nyi Roro Kidul"
          telpon="081233445566"
          job="Berenang"
          Hobi="Nyulik orang yang pakai baju hijau"
        />
        <Contact
          foto={require("../assets/kang_galon.png")}
          name="Kang Galon"
          telpon="085757241980"
          job="Mengantar Galon"
          Hobi="Ngangkat galon kosong"
        />
        <Contact
          foto={require("../assets/tania.jpeg")}
          name="Tania"
          telpon="081355231880"
          job="Pembuli"
          Hobi="Dijadikan meme"
        />
        <Contact
          foto={require("../assets/abdullah.jpeg")}
          name="Abdullah (USA)"
          telpon="081355231880"
          job="Aktor"
          Hobi="Bermain film"
        />
        <Contact
          foto={require("../assets/milah.jpeg")}
          name="Milah (USA)"
          telpon="081355231881"
          job="Artis"
          Hobi="Bermain film"
        />
        <Contact
          foto={require("../assets/ria_ricis.jpeg")}
          name="Ria ricis"
          telpon="081355231882"
          job="Youtuber"
          Hobi="Pansos"
        />
        <Contact
          foto={require("../assets/love.png")}
          name="My Love"
          telpon="081276768080"
          job="Guru"
          Hobi="Menjadi lebih baik"
        />
        <Contact
          foto={require("../assets/atta_halilintar.jpeg")}
          name="Atta Halilintar"
          telpon="081356789111"
          job="Youtuber"
          Hobi="Ngeprank"
        />
        <Contact
          foto={require("../assets/thoriq_halinlintar.jpeg")}
          name="Thoriq Halilintar"
          telpon="081290908765"
          job="Conten Creator"
          Hobi="Naik haji umur 2 bulan"
        />
    </ScrollView>
    
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },

})

export default ContactData;