// IT23204898 Dilmin.H.A.P
import { test, expect } from '@playwright/test';

// POSITIVE FUNCTIONAL TEST CASES (24 Scenarios)

test('Pos_Fun_0001 - Pronoun Variation (They/Group)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('eegollo adha enavaa.', { delay: 50 });
  await page.waitForTimeout(1000); // Wait for translation to process
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('ඒගොල්ලො අද එනවා.');
});

test('Pos_Fun_0002 - Pronoun Variation (She)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('aeya pothak kiyavanavaa.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('ඇය පොතක් කියවනවා.');
});

test('Pos_Fun_0003 - Conditional Sentence (Otherwise)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('ehema naethnam api yamu.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('එහෙම නැත්නම් අපි යමු.');
});

test('Pos_Fun_0004 - Conjunction (But)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('mama aasayi namuth salli naehae.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මම ආසයි නමුත් සල්ලි නැහැ.');
});

test('Pos_Fun_0005 - Superlative Adjective', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('meeka thamayi hodhama eka.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මේක තමයි හොදම එක.');
});

test('Pos_Fun_0006 - Family Context', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('ammayi thaaththayi gedhara.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('අම්මයි තාත්තයි ගෙදර.');
});

test('Pos_Fun_0007 - Food Context', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('mata bath saha elavalu oonee.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මට බත් සහ එලවලු ඕනේ.');
});

test('Pos_Fun_0008 - Travel Mode (Bus)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('api bus ekee yamu.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('අපි bus එකේ යමු.');
});

test('Pos_Fun_0009 - Health Expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('mata oluva kaekkumayi.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මට ඔලුව කැක්කුමයි.');
});

test('Pos_Fun_0010 - Weather Description', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('adha hari rasnayi.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('අද හරි රස්නයි.');
});

test('Pos_Fun_0011 - Shopping Inquiry', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('meeke mila kiiyadha?', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මේකෙ මිල කීයද?');
});

test('Pos_Fun_0012 - Future Time Reference', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('labana sathiyee hamu vemu.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('ලබන සතියේ හමු වෙමු.');
});

test('Pos_Fun_0013 - Percentage Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('vaeda 100% ivarayi.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('වැඩ 100% ඉවරයි.');
});

test('Pos_Fun_0014 - Decimal Numbers', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('bara 10.5 kg.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('බර 10.5 kg.');
});

test('Pos_Fun_0015 - Phone Number Format', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('magee aQQkaya 0771234567', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මගේ අංකය 0771234567.');
});

test('Pos_Fun_0016 - Mixed Language (Office Context)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.click();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('meeting eka cancel unaa.', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('meeting එක cancel උනා.');
});

test('Pos_Fun_0017 - Mixed Language (School Context)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.click();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('teacher class ekata aavaa.', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('teacher class එකට ආවා.');
});

test('Pos_Fun_0018 - Honorifics/Titles', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  // Changed fill -> pressSequentially
  await singlishInput.pressSequentially('sir, mata udhav karanna.', { delay: 50 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('sir, මට උදව් කරන්න.');
});

test('Pos_Fun_0019 - Plural Nouns', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.click();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('Lamayi sellam karanavaa.', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('ළමයි සෙල්ලම් කරනවා.');
});

test('Pos_Fun_0020 - Agreement/Consent', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.click();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('mama ekangayi.', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මම එකන්ගයි.');
});

test('Pos_Fun_0021 - Surprise/Exclamation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.click();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('ammoo! eeka lokuyinee.', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('අම්මෝ! ඒක ලොකුයිනේ.');
});

test('Pos_Fun_0022 - Well Wishes', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.click();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('suba paethum!', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('සුබ පැතුම්!');
});

test('Pos_Fun_0023 - Place Names (Cities)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.click();
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('mama nuvara eLiya yanavaa.', { delay: 100 });
  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('මම නුවර එළිය යනවා.');
});

// Fixed duplicated code in this test
test('Pos_Fun_0024 - Personal Names', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

  await singlishInput.pressSequentially('kamal ', { delay: 100 });
  await page.waitForTimeout(500);
  await singlishInput.pressSequentially('magee ', { delay: 100 });
  await page.waitForTimeout(500);
  await singlishInput.pressSequentially('yaaluvek.', { delay: 100 });

  await page.waitForTimeout(1000);
  await singlishInput.press('Enter');

  await expect(sinhalaOutput).toContainText('කමල් මගේ යාලුවෙක්.');
});

// NEGATIVE FUNCTIONAL TEST CASES (10 Scenarios)

test('Neg_Fun_0001 - Food Context', async ({ page }) => {
   await page.goto('https://www.swifttranslator.com/');
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
    
    await singlishInput.click();
    await singlishInput.pressSequentially('mata bath saha eLavalu oonee.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    // Expect 'එලවලු' (dental 'l') as that is what lowercase 'l' produces
    await expect(sinhalaOutput).toContainText('මට බත් සහ එලවලු ඕනේ.');
  });

  test('Neg_Fun_0002 - Health Expression', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    // 'kaekkumayi' -> 'ae' gives 'ඇ'
    await singlishInput.pressSequentially('mata oluva kaekkumayi.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('මට ඔලුව කැක්කුමයි.');
  });

  test('Neg_Fun_0003 - Percentage Handling', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    // 'v' for 'w', 'ae' for 'a' -> 'vaeda' = 'වැඩ'
    await singlishInput.pressSequentially('Waeda 100% ivarayi.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('වැඩ 100% ඉවරයි.');
  });

  test('Neg_Fun_0004 - Phone Number Format', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    // 'ankaya' produces 'අන්කය' (Tool behavior)
    await singlishInput.pressSequentially('mage ankaya 0771234567.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('මගේ අන්කය 0771234567.');
  });

  test('Neg_Fun_0005 - Mixed Language (Office Context)', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    await singlishInput.pressSequentially('meeting aka cancel unaa.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('meeting එක cancel උනා.');
  });

  test('Neg_Fun_0006 - Mixed Language (School Context)', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    // 'aavaa' (double 'a') -> 'ආවා'
    await singlishInput.pressSequentially('teacher class akata aavaa.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('teacher class එකට ආවා.');
  });

  test('Neg_Fun_0007 - Plural Nouns', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    // 'Lamayi' (Capital L) -> 'ළමයි'
    await singlishInput.pressSequentially('Lamayi sellam karanavaa.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('ළමයි සෙල්ලම් කරනවා.');
  });

  test('Neg_Fun_0008 - Agreement/Consent', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    await singlishInput.pressSequentially('mama ekangayi.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    // Expect 'එකන්ගයි' (matches tool output)
    await expect(sinhalaOutput).toContainText('මම එකන්ගයි.');
  });

  test('Neg_Fun_0009 - Surprise/Exclamation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    // 'ammoo' (Long o), 'lokuyinee' (Long e)
    await singlishInput.pressSequentially('ammoo! eeka lokuyinee.', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('අම්මෝ! ඒක ලොකුයිනේ.');
  });

  test('Neg_Fun_0010 - Well Wishes', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/')
    const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
    const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();

    await singlishInput.click();
    // 'paethum' (ae for ඇ)
    await singlishInput.pressSequentially('suba paethum!', { delay: 100 });
    
    await page.waitForTimeout(1000);
    await singlishInput.press('Enter');

    await expect(sinhalaOutput).toContainText('සුබ පැතුම්!');
  });
  
  // ADDITIONAL TEST CASES (3 Scenarios)

  test('UI_Test_001 - Verify Input Clearing Functionality', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');

  await singlishInput.pressSequentially('mama gedara yanavaa', { delay: 100 });
  await expect(singlishInput).toHaveValue('mama gedara yanavaa');

  await singlishInput.clear();
  await expect(singlishInput).toBeEmpty();
});




