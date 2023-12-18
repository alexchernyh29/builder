import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "./vfs_fonts.js";
pdfMake.vfs = pdfFonts;

export const exportPdf = async (name, company, name_position, legal_address, fact_address) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
  let docDefinition = {
    footer: [
    {canvas: [
      {
        type: 'line',
        x1: 40, y1: 0,
        x2: 550, y2: 0,
        lineWidth: 1
      },
            ]},
      { text: 'Ассоциация специалистов, инвесторов и организаций в сфере информационных технологий МИТ – Мы ИТ', alignment: 'center', margin: [ 0, 5, 0, 0 ], fontSize: 10 },
      { text: 'ИНН 7720859286, e-mail: info@mit-union.ru, www.mit-union.ru', alignment: 'center', margin: [ 0, 0, 0, 0 ], fontSize: 10 },
    ],
    content: [
      { text: 'ЗАЯВЛЕНИЕ', alignment: 'center', bold: true, fontSize: 14, margin: [ 0, 0, 0, 20 ] },
      { text: 'О вступлении в Ассоциацию специалистов, инвесторов и организаций в сфере информационных технологий МИТ – Мы ИТ', alignment: 'center', fontSize: 14 },
      { text: 'Просим принять нашу организацию  в члены в Ассоциацию специалистов, инвесторов и организаций в сфере информационных технологий МИТ – Мы ИТ', alignment: 'left', margin: [ 0, 30, 0, 30 ], fontSize: 12 },
      { text: company, alignment: 'center', fontSize: 14, margin: [ 0, 0, 0, 5 ] },
      {canvas: [
      {
        type: 'line',
        x1: 0, y1: 0,
        x2: 500, y2: 0,
        lineWidth: 1
      },
            ]},
      { text: '(полное наименование организации с указанием организационно-правовой формы)', alignment: 'center', margin: [ 0, 10, 0, 10 ], fontSize: 8 },
      { text: 'Подтверждаем свое согласие с целями и задачами Ассоциации.', alignment: 'left', margin: [ 0, 10, 0, 10 ], fontSize: 12 },
      { text: 'С Уставом МИТ - Мы ИТ ознакомлены и обязуемся выполнять его требования, а также требования учредительных и внутренних документов.', alignment: 'left', margin: [ 0, 0, 0, 20 ], fontSize: 12 },
      { text: 'Руководитель организации:', alignment: 'left', margin: [ 0, 0, 0, 20 ], fontSize: 12 },
      { text: name, alignment: 'center', fontSize: 14, margin: [ 0, 0, 0, 5 ] },
      {canvas: [
      {
        type: 'line',
        x1: 0, y1: 0,
        x2: 500, y2: 0,
        lineWidth: 1
      },
            ]},
      { text: '(Ф.И.О.)', alignment: 'center', margin: [ 0, 5, 0, 10 ], fontSize: 8 },
      { text: 'Юридический адрес организации:', alignment: 'left', margin: [ 0, 0, 0, 20 ], fontSize: 12 },
      { text: legal_address, alignment: 'left', margin: [ 0, 0, 0, 5 ], fontSize: 10 },
      {canvas: [
      {
        type: 'line',
        x1: 0, y1: 0,
        x2: 500, y2: 0,
        lineWidth: 1
      },
            ]},
      { text: 'Фактический адрес организации:', alignment: 'left', margin: [ 0, 20, 0, 20 ], fontSize: 12 },
      { text: fact_address, alignment: 'left', margin: [ 0, 0, 0, 5 ], fontSize: 10 },
      {canvas: [
      {
        type: 'line',
        x1: 0, y1: 0,
        x2: 500, y2: 0,
        lineWidth: 1
      },
            ]},
            {columns: [
            {
            width: '80%',
            text: 'Дата:', alignment: 'right', margin: [ 0, 10, 0, 0 ], fontSize: 12
            },
            {
            width: '20%',
            text: today, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 420, y2: 0,
            lineWidth: 1
        },]},
        { text: '', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 12 },
        { text: name, alignment: 'center', margin: [ 50, 20, 0, 0 ], fontSize: 8 },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: '(Ф.И.О. руководителя)', alignment: 'center', margin: [ 0, 0, 0, 20 ], fontSize: 8 },
        { text: name_position, alignment: 'center', margin: [ 50, 0, 0, 0 ], fontSize: 8 },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: '(должность  руководителя)', alignment: 'center', margin: [ 0, 0, 0, 20 ], fontSize: 8 },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: '(подпись  руководителя)', alignment: 'center', margin: [ 0, 0, 0, 40 ], fontSize: 8 },
      { text: 'Заполненную Заявление передать в Дирекцию МИТ - Мы ИТ с перечнем документов документов:', alignment: 'left', margin: [ 0, 0, 0, 0 ], fontSize: 10 },
      { text: 'Анкета, Устав юридического лица, Свидетельство о государственной регистрации/постановке на учет в налоговом органе или лист записи о создании организации, презентация о компании, лицензионное соглашение на доступ к базе данных Ассоциации', alignment: 'left', margin: [ 0, 0, 0, 50 ], fontSize: 10 },
      
      
    ]
  };
  const pdf = pdfMake.createPdf(docDefinition)
  pdf.download()
}
export const exportPdfForm = async (company, full_name_company_lt, years, postal_address, legal_address, inn, website, name, name_position, name_phone, name_email, representative_name, representative_position, representative_phone, representative_email, number_stuff, area_activity, revenue, type_company) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
  let docDefinition = {
    footer: [
    {canvas: [
      {
        type: 'line',
        x1: 40, y1: 0,
        x2: 550, y2: 0,
        lineWidth: 1
      },
            ]},
      { text: 'Ассоциация специалистов, инвесторов и организаций в сфере информационных технологий МИТ – Мы ИТ', alignment: 'center', margin: [ 0, 5, 0, 0 ], fontSize: 10 },
      { text: 'ИНН 7720859286, e-mail: info@mit-union.ru, www.mit-union.ru', alignment: 'center', margin: [ 0, 0, 0, 0 ], fontSize: 10 },
    ],
    content: [
        { text: 'АНКЕТА КАНДИДАТА (ЮРЛИЦО)', alignment: 'center', bold: true, fontSize: 14, margin: [ 0, 0, 0, 5 ] },
        { text: 'в Ассоциацию специалистов, инвесторов и организаций в сфере информационных технологий МИТ – Мы ИТ', bold: true, alignment: 'center', fontSize: 10 },
        {columns: [
            {
            width: '35%',
            text: 'Полное название организации:', alignment: 'left', margin: [ 0, 5, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: company, alignment: 'center', margin: [ 0, 5, 0, 0 ], fontSize: 10,
            }],
        columnGap: 0
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Полное название организации (лат):', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: full_name_company_lt, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Год образования:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: years, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: 'Почтовый адрес организации', alignment: 'left', margin: [ 0, 15, 0, 0 ], fontSize: 10 },
        {columns: [
            {
            width: '30%',
            text: '(с индексом):', alignment: 'left', margin: [ 0, 0, 0, 0 ], fontSize: 10
            },
            {
            width: '70%',
            text: postal_address, alignment: 'center', margin: [ 0, 0, 0, 0 ], fontSize: 8,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Юридический адрес организации:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: legal_address, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'ИНН:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: inn, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Сайт в Интернете:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: website, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: 'Руководитель организации:', bold: true, alignment: 'left', margin: [ 0, 20, 0, 0 ], fontSize: 12 },
        {columns: [
            {
            width: '35%',
            text: 'Фамилия, имя, отчество:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: name , alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Полное название должности:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: name_position, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Телефон:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: name_phone , alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'e-mail:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: name_email, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: 'Контактное лицо', bold: true, alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 12 },
        { text: '(Представитель):', bold: true, alignment: 'left', margin: [ 0, 0, 0, 5 ], fontSize: 12 },
        {columns: [
            {
            width: '35%',
            text: 'Фамилия, имя, отчество:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: representative_name, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Полное название должности:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: representative_position, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'Телефон:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '55%',
            text: representative_phone, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 0
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '35%',
            text: 'e-mail:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '65%',
            text: representative_email, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: 'Характеристика организации:', bold: true, alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 12 },
        {columns: [
            {
            width: '55%',
            text: 'Примерная численность сотрудников:', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '45%',
            text: number_stuff, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 320, y2: 0,
            lineWidth: 1
        },]},
        {text: 'Направление деятельности (разработка ПО, интеграция,', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10},
        {columns: [
            {
            width: '45%',
            text: 'дистрибуция, венчурное инвестирование):', alignment: 'left', margin: [ 0, 0, 0, 0 ], fontSize: 10
            },
            {
            width: '55%',
            text: area_activity, alignment: 'center', margin: [ 0, 0, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 320, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '45%',
            text: 'Выручка за 2022 г.', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10
            },
            {
            width: '55%',
            text: revenue, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 320, y2: 0,
            lineWidth: 1
        },]},
        { text: 'Как вы позиционируете ваш холдинг/предприятие (для', alignment: 'left', margin: [ 0, 10, 0, 0 ], fontSize: 10 },
        { text: 'определения размера членского взноса (стартап, ИТ-', alignment: 'left', margin: [ 0, 0, 0, 0 ], fontSize: 10 },
        { text: 'компания, корпорация, венчурный фонд, НКО и др.) см.', alignment: 'left', margin: [ 0, 0, 0, 0 ], fontSize: 10 },
        {columns: [
            {
            width: '60%',
            text: '«Положение о членских взносах»):', alignment: 'left', margin: [ 0, 0, 0, 0 ], fontSize: 10
            },
            {
            width: '40%',
            text: type_company, alignment: 'center', margin: [ 0, 0, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 320, y2: 0,
            lineWidth: 1
        },]},
        {columns: [
            {
            width: '80%',
            text: 'Дата:', alignment: 'right', margin: [ 0, 10, 0, 0 ], fontSize: 12
            },
            {
            width: '20%',
            text: today, alignment: 'center', margin: [ 0, 10, 0, 0 ], fontSize: 10,
            }],
        columnGap: 10
        },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 420, y2: 0,
            lineWidth: 1
        },]},
        { text: '', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 12 },
        { text: name, alignment: 'center', margin: [ 50, 10, 0, 0 ], fontSize: 8 },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: '(Ф.И.О. руководителя)', alignment: 'center', margin: [ 0, 0, 0, 20 ], fontSize: 8 },
        { text: name_position, alignment: 'center', margin: [ 50, 0, 0, 0 ], fontSize: 8 },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: '(должность  руководителя)', alignment: 'center', margin: [ 0, 0, 0, 20 ], fontSize: 8 },
        {canvas: [
        {
            type: 'line',
            x1: 500, y1: 0,
            x2: 220, y2: 0,
            lineWidth: 1
        },]},
        { text: '(подпись  руководителя)', alignment: 'center', margin: [ 0, 0, 0, 40 ], fontSize: 8 },
        { text: 'Заполненную анкету передать в Дирекцию МИТ - Мы ИТ с перечнем документов документов:', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 10 },
        { text: '- презентация компании;', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 10 },
        { text: '- анкета юридического лица;', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 10 },
        { text: '- скан-копия Устава юридического лица;', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 10 },
        { text: '- скан-копия Свидетельства о государственной регистрации/постановке на учет в налоговом органе или лист записи о создании организации;', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 10 },
        { text: '- документы, подтверждающие оплату по Лицензионному соглашению на доступ к базе данных Ассоциации (при наличии);', alignment: 'left', margin: [ 0, 0, 0, 10 ], fontSize: 10 },
    ]
  };
  const pdf = pdfMake.createPdf(docDefinition)
  pdf.download()
}