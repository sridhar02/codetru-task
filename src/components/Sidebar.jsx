import React, { useState } from "react";

import { SidebarItem } from "./SidebarItem";

import Logo from "/assets/Logo.svg";
// import  Dashboard from ""

const icons = {
  dashboard: "/public/assets/dashboard.svg",
  employees: "/public/assets/employees.svg",
  placements: "/assets/placements.svg",
  timeSheets: "/assets/time-sheets.svg",
  sales: "/assets/sales.svg",
  ledger: "/assets/ledger.svg",
  balanceSheets: "/assets/balance-sheets.svg",
  expenseManagement: "/assets/expense-management.svg",
  payroll: "/assets/payroll.svg",
  clients: "/assets/clients.svg",
  immigration: "/assets/immigration.svg",
  employeeSelfService: "/assets/employee-self-service.svg",
  arrow: "/assets/arrow.svg",
};

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={
        (expanded ? "w-[350px]" : "") + " border-r-2 h- p-4 px-8 py-10 relative"
      }
    >
      <button
        className="rounded-full p-2 bg-gray-300 absolute -right-3 top-[120px]"
        onClick={() => setExpanded(!expanded)}
      >
        <img
          src={icons.arrow}
          alt=""
          className={expanded ? "rotate-180" : ""}
        />
      </button>
      <div className="flex gap-4 items-center">
        <img src={Logo} alt="logo" className="w-16 h-16" />
        {expanded && (
          <div className="flex flex-col items-start">
            <div className="font-bold text-2xl"> BrownMonster</div>
            <span className="text-sm text-black">Efficiency made easy</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8 items-start mt-10">
        <div className="border-b-2 w-full pb-4">
          <SidebarItem
            iconPath={icons.dashboard}
            expanded={expanded}
            title="Dashboard"
          />
        </div>
        <SidebarItem
          iconPath={icons.employees}
          expanded={expanded}
          title="Employees"
        />
        <SidebarItem
          iconPath={icons.placements}
          expanded={expanded}
          title="Placements"
        />
        <SidebarItem
          iconPath={icons.timeSheets}
          expanded={expanded}
          title="Time Sheets"
        />
        <div className="border-t-2 w-full pt-4">
          <SidebarItem
            iconPath={icons.sales}
            expanded={expanded}
            title="Sales"
          />
        </div>
        <SidebarItem
          iconPath={icons.ledger}
          expanded={expanded}
          title="Ledger"
        />
        <SidebarItem
          iconPath={icons.balanceSheets}
          expanded={expanded}
          title="Balance Sheets"
        />
        <SidebarItem
          iconPath={icons.expenseManagement}
          expanded={expanded}
          title="Expense Management"
        />
        <div className="border-b-2 w-full pb-4">
          <SidebarItem
            iconPath={icons.payroll}
            expanded={expanded}
            title="Payroll"
          />
        </div>
        <SidebarItem
          iconPath={icons.clients}
          expanded={expanded}
          title="Clients"
        />
        <SidebarItem
          iconPath={icons.immigration}
          expanded={expanded}
          title="Immigration"
        />
        <SidebarItem
          iconPath={icons.employeeSelfService}
          expanded={expanded}
          title="Employee Self Service"
        />
      </div>
    </div>
  );
};
