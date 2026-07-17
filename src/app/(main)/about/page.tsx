import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import aboutImg1 from '@/assets/about/about-1.jpg';
import aboutImg2 from '@/assets/about/about-2.png';

export const metadata: Metadata = {
  title: 'درباره ما',
};

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <section className='py-16 lg:py-24'>
        <div className='flex flex-col items-center gap-12 lg:flex-row'>
          <div className='flex-1 space-y-6 text-center lg:text-right'>
            <h1 className='text-3xl font-bold text-black dark:text-accent-500 xl:text-5xl'>اقـامـتـگاه لــوڪـس پــارادایــس</h1>

            <p className='leading-8 text-black dark:text-primary-200 xl:text-xl'>
              جایی که زیبایی طبیعت با آسایش و رفاه به زیبایی در هم می‌آید. در دل کوهستان‌های مخفی، این بهشت دور از خانه در انتظار شماست. اما اینجا فقط
              قضیه اتاق‌های لوکس نیست؛ بلکه تجربه پیوند دوباره با طبیعت و لذت بردن از آن در فضایی آرام و دلنشین است.
            </p>

            <p className='leading-8 text-black dark:text-primary-200 xl:text-xl'>
              ما چندین اتاق لوکس داریم که اقامتگاهی دنج را برای شما فراهم می‌کنند، اما آزادی و آرامش واقعی را در کوه‌های اطراف خواهید یافت. در میان
              جنگل‌های سرسبز قدم بزنید، هوای تازه را تنفس کنید و کنار گرمای آتش کمپ شاهد درخشش ستارگان در آسمان باشید.
            </p>

            <p className='leading-8 text-black dark:text-primary-200 xl:text-xl'>
              اینجا جایی است که خاطرات ماندگار شکل می‌گیرند؛ جایی برای استراحت در یک فضای فوق‌العاده زیبا.
            </p>
          </div>

          <div className='flex flex-1 justify-center'>
            <Image src={aboutImg1} alt='about-image1' className='w-full max-w-[550px] rounded-3xl object-cover shadow-2xl shadow-accent-500/40' />
          </div>
        </div>
      </section>

      <section className='py-16 lg:py-24'>
        <div className='flex flex-col-reverse items-center gap-12 lg:flex-row'>
          <div className='flex flex-1 justify-center'>
            <Image src={aboutImg2} alt='about-image2' className='w-full max-w-[550px] rounded-3xl object-cover shadow-2xl shadow-accent-500/40' />
          </div>

          <div className='flex-1 space-y-6 text-center lg:text-right'>
            <h2 className='text-3xl font-bold text-black dark:text-accent-500 xl:text-5xl'>مدیـریـت مـا از گـذشته تا امـروز</h2>

            <p className='leading-8 text-black dark:text-primary-200 xl:text-xl'>
              از همان روزهای اول تاکنون اقامتگاه لوکس پارادایس یک اقامتگاه محبوب و دوست‌داشتنی بوده است. این مکان با عشق و مراقبت پرورش یافته و به
              عنوان نمادی از تعهد ما به خلق یک محیط گرم و پذیرا شناخته می‌شود.
            </p>

            <p className='leading-8 text-black dark:text-primary-200 xl:text-xl'>
              در طول سال‌ها ما ماهیت اصلی پارادایس را حفظ کرده‌ایم و زیبایی کوهستان را با مهمان‌نوازی صمیمانه ترکیب کرده‌ایم. اینجا شما فقط یک مهمان
              نیستید؛ بلکه بخشی از تجربه ما هستید. به اقامتگاه لوکس پارادایس بیایید، جایی که سنت با آرامش گره می‌خورد و هر بازدید مثل بازگشت به خانه
              خواهد بود.
            </p>
          </div>
        </div>
      </section>

      <section className='py-10'>
        <div className='rounded-3xl bg-accent-500 px-8 py-12 text-center shadow-inner shadow-black dark:bg-primary-800'>
          <p className='mx-auto max-w-4xl text-lg leading-9 text-gray-700 dark:text-primary-200'>
            ما متعهدیم که با حفظ محیط زیست و احترام به فرهنگ بومی، فضایی امن و گرم را برای تمام مهمانان فراهم کنیم. ارزش ما در رضایت شما و خاطراتی است
            که با خود به خانه می‌برید.
          </p>
        </div>
      </section>

      <section className='mb-16 py-16 text-center'>
        <h2 className='text-3xl font-semibold text-accent-500 lg:text-4xl xl:text-5xl'>همین حالا برنامه‌ریزی کنید</h2>

        <p className='mt-4 text-lg text-gray-600 dark:text-primary-100'>برای رزرو اتاق رویایی‌تان اقدام کنید.</p>

        <Link
          href='/rooms'
          className='mt-8 inline-flex items-center rounded-2xl bg-accent-500 px-10 py-4 text-lg font-bold text-primary-900 transition-transform duration-300 hover:scale-105 md:px-14 md:text-xl'
        >
          مشاهده اتــاق‌ هـا
        </Link>
      </section>
    </div>
  );
}
