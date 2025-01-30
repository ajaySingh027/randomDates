import { Locator, Page } from "@playwright/test";

export class CalendarDatesPage {
    readonly page: Page;
    readonly totalDatesField = 'input[name="num"]';
    readonly startDay = 'select[name="start_day"]';
    readonly startMonth = 'select[name="start_month"]';
    readonly startYear = 'select[name="start_year"]';
    readonly endDay = 'select[name="end_day"]';
    readonly endMonth = 'select[name="end_month"]';
    readonly endYear = 'select[name="end_year"]';
    readonly getDatesBtn = 'input[value="Get Dates"]';
    readonly allowCookiesBtn = 'Allow Selected';

    constructor(page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.goto('/calendar-dates/');
        await this.page.getByRole('button', { name: this.allowCookiesBtn }).click();  // To accept the cookies popup
    }

    /** 
     * @param num : number for total dates
     */
    async setTotalDates(num: number) {
        await this.page.locator(this.totalDatesField).fill(String(num));
    }

    /**
     * @param field : field name to be set
     * @param value : value to be set
     */
    async setDateField(field: string, value: string) {
        await this.page.selectOption(field, value);
    }

    /**
     * To set the start date for the calendar
     */
    async setStartDate(day: string, month: string, year: string) {
        await this.setDateField(this.startDay, day);
        await this.setDateField(this.startMonth, month);
        await this.setDateField(this.startYear, year);
    }

    /**
     * To set the end date for the calendar
     */
    async setEndDate(day: string, month: string, year: string) {
        await this.setDateField(this.endDay, day);
        await this.setDateField(this.endMonth, month);
        await this.setDateField(this.endYear, year);
    }

    /**
     * To click the Get Dates button
     */
    async getDates() {
        await this.page.locator(this.getDatesBtn).click();
    }

    /**
     * If day is between 1-9, add a leading zero
     */
    async addLeadingZero(num: string) {
        return num.length === 1 ? `0${num}` : num;
    }

    /**
     * To get the number for the Month string
     */
    async getMonthNumber(month: string) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthNum = months.indexOf(month) + 1;
        return monthNum < 10 ? `0${monthNum}` : monthNum;
    }
}