import React from "react";

// Feather
import { Feather } from "@expo/vector-icons";

// UseTheme
import { useTheme } from "styled-components";

// Function
import { generateInterval } from "./generateInterval";

// Calendar
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  CalendarProps,
} from "react-native-calendars";

// pt-br locale
import { ptBR } from "./localeConfig";
// LocaleConfig for pt-br language
LocaleConfig.locales["pt-br"] = ptBR;
// Set default locale to pt-br
LocaleConfig.defaultLocale = "pt-br";

// Interface
interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

function Calendar({ markedDates, onDayPress }: CalendarProps) {
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
      // Set the markingType to period to mark the days between the start and end date
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, MarkedDateProps, DayProps, generateInterval };
