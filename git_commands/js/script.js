$(function () {
    let commands = [
        {
            title: "نمایش ورژن گیت سیستم",
            code: `git --version`
        },
        {
            title: "انجام تنظیمات پروژه",
            code: `git config --global user.email "your-email@gmail.com" \ngit config --global user.name "your name"`
        },
        {
            title: "ایجاد مخزن",
            code: `git init`
        },
        {
            title: "نمایش وضعیت فایل ها",
            code: `git status`
        },
        {
            title: "اضافه کردن فایل ها به استیج",
            code: `git add [اسم فایل]\ngit add .`
        },
        {
            title: "ذخیره فایل ها در مخزن",
            code: `git commit -m "پیام مورد نظر"\ngit commit -a -m "پیام مورد نظر"`
        },
        {
            title: "نمایش تعداد و اطلاعات کامیت ها",
            code: `git log\ngit log --oneline\ngit log --oneline --author="نام شخص"\ngit log --oneline --grep="پیغام مورد نظر"\ngit log --oneline --after="تاریخ"\ngit log --oneline --patch`
        },
        {
            title: "برگرداندن فایل از استیج",
            code: `git rm --cached [اسم فایل]\ngit rm --cached -r .\n<span class="text-secondary">// برای زمانی که هنوز کامیتی رخ نداده </span>\ngit restore --staged [اسم فایل]\ngit restore --staged .`
        },
        {
            title: "نمایش تغییرات انجام شده",
            code: `git diff`
        },
        {
            title: "راهنما دستور مدنظر در گوگل",
            code: `git [نام دستور] --help`
        },
        {
            title: "راهنما دستور مدنظر در پنجره کنسولی",
            code: `git [نام دستور] -help`
        },
        {
            title: "نمایش جزئیات یک کامیت",
            code: `git show [شناسه کامیت]`
        },
        {
            title: "نمایش لیست شاخه ها",
            code: `git branch`
        },
        {
            title: "ساخت شاخه جدید",
            code: `git branch [اسم شاخه]`
        },
        {
            title: "تغییر نام یک شاخه",
            code: `git branch -m [نام فعلی شاخه] [نام جدید شاخه]`
        },
        {
            title: "تغییر نام یک شاخه",
            code: `git branch -d [اسم شاخه]`
        },
        {
            title: "رفتن به یک شاخه (سوئیچ)",
            code: `git checkout [اسم شاخه]`
        },
        {
            title: "رفتن به یک کامیت",
            code: `git checkout [اسم کامیت]`
        },
        {
            title: "اعمال تغییرات یک شاخه دیگر روی شاخه ای که در ان هستیم",
            code: `git merge [اسم شاخه]`
        },
        {
            title: "نگهداری تغییراتی که هنوز کامیت نشده",
            code: `git stash`
        },
        {
            title: "ذخیره یک پیغام همراه با استش کردن",
            code: `git stash save "پیام مورد نظر"`
        },
        {
            title: "نمایش تغییرات استش",
            code: `git stash show -p [نام استش]`
        },
        {
            title: "حذف استش",
            code: `git stash drop [نام استش]`
        },
        {
            title: "تغییرات را از استش تبدیل به اتیج میکند و روی استش عملیاتی انجام میدهد",
            code: `git stash apply [نام استش]\ngit stash pop [نام استش]`
        },
        {
            title: "نشان میدهد چه کسی چه تغییری در فایل به وجود اورده",
            code: `git blame [ادرس فایل]`
        },
        {
            title: "نمایش لیست تگ ها",
            code: `git tag`
        },
        {
            title: "ایجاد یک تگ",
            code: `git tag [اسم تگ] [ایدی کامیت]`
        },
        {
            title: "حذف یک برچسب",
            code: `git tag -d [اسم برچسب]`
        },
        {
            title: "ارسال برچسب به مخازن دور",
            code: `git push origin [نام برچسب]`
        },
        {
            title: "حذف برچسب از مخازن دور",
            code: `git push origin --delete [نام برچسب]`
        },
        {
            title: "کپی گرفتن از مخزن روی سیستم لوکال",
            code: `git clone [ادرس اینترنتی مخزن روی گیتهاب]`
        },
        {
            title: "اتصال به مخزن انلاین",
            code: `git remote add origin [ادرس پروژه روی گیتهاب]`
        },
        {
            title: "قطع ارتباط با مخزن انلاین",
            code: `git remote remove origin [ادرس پروژه روی گیتهاب]`
        },
        {
            title: "لیست مخزن هایی که با انها ارتباط برقرار شده",
            code: `git remote -v`
        },
        {
            title: "اپلود روی گیتهاب",
            code: `git push [نام ریموت] [نام شاخه]`
        },
        {
            title: "اعمال تغییرات انجام شده در گیتهاب روی پروژه",
            code: `git pull [نام ریموت] [نام شاخه]`
        },
        {
            title: "نمایش تغییراتی که در مخزن انلاین رخ داده",
            code: `git fetch origin`
        }
    ]

    // --------------------------------------------------------------------

    for (let i = 0; i < commands.length; i++) {
        $(".container").append(
            `<div class="code-wrapper mt-5 pt-3">
        <h5 class="title fw-bolder">${commands[i].title}</h5>
        <div class="code-box overflow-hidden rounded-3 mt-4">
            <div class="header d-flex justify-content-between align-items-center px-2 user-select-none">
                <div class="btn-wrapper d-flex justify-content-center align-items-center">
                    <button class="dot border-0 bg-danger" type="button"></button>
                    <button class="dot border-0 bg-warning" type="button"></button>
                    <button class="dot border-0 bg-success" type="button"></button>
                </div>
                <button class="copy-btn rounded-2 text-white border-0" type="button">کپی کردن کد</button>
            </div>
            <div class="content pt-4 px-3 ">
                <pre class="overflow-hidden"><code class="code_tag">${commands[i].code}</code></pre>
            </div>
        </div>
    </div>`)
    }

    // var paragraph = $('#yourParagraphID');
    //
    // var paragraphContent = paragraph.text();
    //
    // var updatedContent = paragraphContent.replace(/git/g, '1234');
    //
    // paragraph.text(updatedContent);

    for (let i = 0 ; i<$(".code_tag").length;i++){
        let text =$(".code_tag").eq(i).html()
        let final_text = text.replace(/git/g,'<span class="gold">git</span>')
        $(".code_tag").eq(i).html(final_text)
    }
})