import React from "react";

// Feather
import { Feather } from "@expo/vector-icons";

// UseTheme
import { useTheme } from "styled-components";

// Calendar
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";

// LocaleConfig for pt-br language
LocaleConfig.locales["pt-br"] = {
  // Full names for months
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  // Short names for months
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  // Full names for days
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  // Short names for days
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
  // What day is named
  today: "Hoje",
};
// Set default locale to pt-br
LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
  // Theme
  const theme = useTheme();

  return (
    <CustomCalendar
      // RenderArrow to render the arrows with Feather
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      // Header style with borderBottom and marginBottom to separate the header from the days
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      // Weekday style with textDayHeaderFontSize and textDayHeaderFontFamily
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        // Arrow style with marginHorizontal to separate the arrows from the header
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      // Set the first day of the week to Monday
      firstDay={1}
      // Set the minimum date to today
      minDate={String(new Date())}
    />
  );
}
