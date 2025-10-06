import QRCode from 'qrcode';

export async function generateQRCode(cid: string): Promise<string> {
  return await QRCode.toDataURL(cid);
}
