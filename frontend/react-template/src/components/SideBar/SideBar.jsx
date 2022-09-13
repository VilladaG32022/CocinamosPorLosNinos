import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

export default function SideBar() {
  return (
    <CDBSidebar
      style={{ height: 1028 }}
      textColor="#333"
      backgroundColor="#f0f0f0"
    >
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        CPLN
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="fa-thin fa-user">Perfil</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fa-thin fa-book">
            Tablero
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fa-light fa-calendar">
            Calendario
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fa-light fa-map">Rutas</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fa-light fa-utensils">
            Menu
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fa-light fa-question" iconType="solid">
            FAQ
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          <i> Volver al Inico </i>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
}
