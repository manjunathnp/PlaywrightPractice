import { test, expect } from '@playwright/test';
import fs, { readFileSync } from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join('./resources','test-data', 'test1.csv')), {
    columns: true,
    skip_empty_lines: true
});

records.forEach((data) => {
    test(`MyTest ${data.test_case}`, async ({ page }) => {
        //await page.goto(data.some_value); // Perform test actions here
        // Add your test assertions
        console.log("Test_Case: ",data.test_case);
        console.log("Some_Value: ",data.some_value);
        console.log("Some_Other_Value: ",data.some_other_value);

    });
});

// Find the record with "foobar21"
const targetRecord = records.find((data) => data.some_other_value === 'foobar21');

if (targetRecord) {
    test(`Fetch Particular Record ${targetRecord.test_case}`, async ({ page }) => {
        // Perform test actions here (e.g., await page.goto(targetRecord.some_value))

        // Add your test assertions
        console.log("Test_Case:", targetRecord.test_case);
        console.log("Some_Value:", targetRecord.some_value);
        console.log("Some_Other_Value:", targetRecord.some_other_value);
    });
} else {
    console.log('Record with "foobar21" not found.');
}