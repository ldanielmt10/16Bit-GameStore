import React, { FC } from "react";
import styles from "./Panel.module.css";
import { ContainerPanel, ContainerImageUser, NameImage, Image, BtnAdminPanel, IconHome, IconSales, IconProducts, IconUsers } from './Panel.style'
import { Title } from '../index'

interface Props {
  handleInfo(v: any): void;
}

const Panel: FC<Props> = ({handleInfo}) => {
  return (
    <ContainerPanel>
        <Title/>
        <ContainerImageUser>
          <Image 
            src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
            alt="user"/>
          <NameImage>ARMAND GABO</NameImage>
        </ContainerImageUser>
        
          <BtnAdminPanel value="home" onClick={handleInfo} className={styles.BtnAdminPanel}>
            <IconHome/> HOME
          </BtnAdminPanel>
          <BtnAdminPanel value="sales" onClick={handleInfo} className={styles.BtnAdminPanel}>
            <IconSales/>SALES
          </BtnAdminPanel>
          <BtnAdminPanel value="products" onClick={handleInfo} className={styles.BtnAdminPanel}>
            <IconProducts/>PRODUCTS
          </BtnAdminPanel>
          <BtnAdminPanel value="users" onClick={handleInfo} className={styles.BtnAdminPanel}>
            <IconUsers/>USERS
          </BtnAdminPanel>      
    </ContainerPanel>
  );
};

export default Panel;
