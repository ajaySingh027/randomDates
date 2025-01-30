import test, { expect } from "@playwright/test";
import { CalendarDatesPage } from "../pages/calendarDates.page";

test.describe('Random Dates generation', () => {

    test('should be able to generate random dates', async ({ page }) => {
        const calendarDatesPage = new CalendarDatesPage(page);
        const totalDates = 4;
        const startDay = '5';
        const startMonth = 'January';
        const startYear = '2024';
        const endDay = '25';
        const endMonth = 'November';
        const endYear = '2025';
        
        // Go to the calendar dates page
        await calendarDatesPage.goTo();

        // Set the total 4 dates
        await calendarDatesPage.setTotalDates(totalDates);

        // set the start and end dates
        await calendarDatesPage.setStartDate(startDay, startMonth, startYear);
        await calendarDatesPage.setEndDate(endDay, endMonth, endYear);

        // Click the Get Dates button
        await calendarDatesPage.getDates();

        // verify the dates are generated
        await expect(page.locator('p').filter({ hasText: `Here are your ${totalDates} calendar dates` })).toBeVisible();
        await expect(page.locator('p br')).toHaveCount(totalDates);    // checking for number of line breaks equal to total dates

        // Prepare date for leading zero & month number
        const startDayFormatted = await calendarDatesPage.addLeadingZero(startDay);
        const endDayFormatted = await calendarDatesPage.addLeadingZero(endDay);
        const startMonthFormatted = await calendarDatesPage.getMonthNumber(startMonth);
        const endMonthFormatted = await calendarDatesPage.getMonthNumber(endMonth);

        // verify the date range is correct
        await expect(page.getByText('They were picked randomly out')).toContainText(`${startYear}-${startMonthFormatted}-${startDayFormatted}`);
        await expect(page.getByText('They were picked randomly out')).toContainText(`${endYear}-${endMonthFormatted}-${endDayFormatted}`);
        
    });

});