import { BasePage } from '../basePage';
import { Locator } from '@playwright/test';

export class HomePage extends BasePage {
    private readonly contactMenu: string = '[class$="parent"] a[href]:has-text("Contact")';
    private readonly contactUs: string = '[href$="contact"]';
    private readonly handlePopup: string = '[id="interactive-close-button"]';

    async openContactMenu(): Promise<void> {
        await this.page.locator(this.contactMenu).first().click();
        await this.page.locator(this.contactMenu).first().hover();
    }

    async clickContactUs(): Promise<void> {
        await this.page.locator(this.contactUs).first().click();
    }

    async closePopupIfVisible(): Promise<void> {
        await this.page.waitForTimeout(5000);
       try {
        const frame = this.page.frameLocator('iframe[data-test-id="interactive-frame"]');
        await frame.locator(this.handlePopup).click();
       } catch (error) {
         
       }
    }
}
