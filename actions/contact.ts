"use server";

import nodemailer from "nodemailer";

export async function sendGmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "すべての項目を入力してください。" };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const toHostMailData = {
    from: `"お問い合わせフォーム"<${process.env.GMAILUSER}>`,
    to: "afoxinthehell@gmail.com",
    subject: `[お問い合わせ] ${name}様より`,
    text: `${message} Send from ${email}`,
    html: `
        <p>【名前】</p>
        <p>${name}</p>
        <p>【メールアドレス】</p>
        <p>${email}</p>
        <p>【メッセージ内容】</p>
        <p>${message}</p>
    `,
  };

  const toUserMailData = {
    from: `"お問い合わせ受付"<${process.env.GMAILUSER}>`,
    to: email,
    subject: "お問い合わせ受け付けました。",
    text: `${message} Send from ${email}`,
    html: `
    <p>${name}様お問い合わせ頂き、有難う御座います。確認次第、折り返しご連絡致します。</p>
    <p>以下の内容で受け付け致しました。</p>
    <p>-------------------------------------------</p>
    <p>【お名前】</p>
    <p>${name}</p>
    <p>【メールアドレス】</p>
    <p>${email}</p>
    <p>【メッセージ内容】</p>
    <p>${message}</p>
    <p>--------------------------------------------</p>
    `,
  };

  try {
    await transporter.sendMail(toHostMailData);
    await transporter.sendMail(toUserMailData);
    return { success: true, message: "お問い合わせを受け付けました。" };
  } catch (error) {
    console.error("メール送信エラー:", error);
    return { success: false, message: "メール送信に失敗しました。" };
  }
}
