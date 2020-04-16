export default {
    cardData: {
        um03: {
            text: '0.5um', // 輸入框span
            minstyle: { color: 'black' }, // span樣式
            maxstyle: { color: 'black' }, // span樣式
            maxv: 0, // 輸入框值
            minv: 0, // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            min: 0,
            max: 888,
            step: 1
        },
        um05: {
            text: '0.5um', // 輸入框span
            minstyle: { color: 'black' }, // span樣式
            maxstyle: { color: 'black' }, // span樣式
            maxv: 0, // 輸入框值
            minv: 0, // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            min: 0,
            max: 888,
            step: 1
        },
        um10: {
            text: '1.0um', // 輸入框span
            minstyle: { color: 'black' }, // span樣式
            maxstyle: { color: 'black' }, // span樣式
            maxv: 0, // 輸入框值
            minv: 0, // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            min: 0,
            max: 888,
            step: 1
        },
        um20: {
            text: '2.0um', // 輸入框span
            minstyle: { color: 'black' }, // span樣式
            maxstyle: { color: 'black' }, // span樣式
            maxv: 0, // 輸入框值
            minv: 0, // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            min: 0,
            max: 888,
            step: 1
        },
        um50: {
            text: '5.0um', // 輸入框span
            minstyle: { color: 'black' }, // span樣式
            maxstyle: { color: 'black' }, // span樣式
            maxv: 0, // 輸入框值
            minv: 0, // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            min: 0,
            max: 888,
            step: 1
        }
    },
    myFormdataObj: {
        ip: {
            type: 'input', // 輸入框類型
            text: 'IP', // 輸入框span
            spanstyle: { color: 'red' }, // span樣式
            placeholder: '', // 輸入框placeholder
            value: '', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: true
        },
        port: {
            type: 'input', // 輸入框類型
            text: 'PORT', // 輸入框span
            spanstyle: { color: 'red' }, // span樣式
            placeholder: '', // 輸入框placeholder
            value: '', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: true
        },
        user: {
            type: 'input', // 輸入框類型
            text: 'User', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            placeholder: '', // 輸入框placeholder
            value: '', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: false
        },
        password: {
            type: 'input', // 輸入框類型
            text: 'Password', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            placeholder: '', // 輸入框placeholder
            value: '', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: false
        },
        type: {
            type: 'input', // 輸入框類型
            text: '設備類型', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            placeholder: '', // 輸入框placeholder
            value: '', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: false
        },
        area: {
            type: 'select', // 輸入框類型
            text: '廠區', // 輸入框span
            spanstyle: { color: 'red' }, // span樣式
            placeholder: '請選擇', // 輸入框placeholder
            value: 'a', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: true,
            selectData: ['a', 'b', 'c']
        },
        process: {
            type: 'select', // 輸入框類型
            text: '製程', // 輸入框span
            spanstyle: { color: 'red' }, // span樣式
            placeholder: '請選擇', // 輸入框placeholder
            value: 'a', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: true,
            selectData: ['a', 'b', 'c']
        },
        floor: {
            type: 'select', // 輸入框類型
            text: '樓層', // 輸入框span
            spanstyle: { color: 'red' }, // span樣式
            placeholder: '請選擇', // 輸入框placeholder
            value: 'a', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: true,
            selectData: ['a', 'b', 'c']
        },
        line: {
            type: 'select', // 輸入框類型
            text: '線體', // 輸入框span
            spanstyle: { color: 'red' }, // span樣式
            placeholder: '請選擇', // 輸入框placeholder
            value: 'a', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: true,
            selectData: ['a', 'b', 'c']
        },
        station: {
            type: 'select', // 輸入框類型
            text: '工站', // 輸入框span
            spanstyle: { color: 'red' }, // span樣式
            placeholder: '請選擇', // 輸入框placeholder
            value: 'a', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: '',
            star: true,
            selectData: ['a', 'b', 'c']
        }
    },
    myFormdata: [
        {
            type: 'input', // 輸入框類型
            text: 'SerialNumber Length', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            placeholder: 'SerialNumber Length', // 輸入框placeholder
            value: 'SerialNumber Length', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            star: true
        },
        {
            type: 'input', // 輸入框類型
            text: 'Initial acqion', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            placeholder: 'Initial acqtion', // 輸入框placeholder
            value: 'Initial acquisition', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            star: true
        },
        {
            type: 'text_area', // 輸入框類型
            text: 'Initial', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            placeholder: 'Initial acquisition', // 輸入框placeholder
            value: 'Initial acquisition', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            star: true
        },
        {
            type: 'input_number', // 輸入框類型
            text: 'Initial', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            value: 2, // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            star: true,
            min: 0,
            max: 888,
            step: 1
        },
        {
            type: 'select', // 輸入框類型
            text: '下拉選', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            placeholder: '請選擇', // 輸入框placeholder
            value: 'a', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            star: true,
            selectData: ['a', 'b', 'c']
        },
        {
            type: 'date', // 輸入框類型
            text: '請選擇時間', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            // placeholder: '請選擇', // 輸入框placeholder
            // value: moment().endOf('day'), // 輸入框值
            value: moment(new Date()).subtract(2, 'days'),
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            star: true
        },
        {
            type: 'radio', // 輸入框類型
            text: '單選', // 輸入框span
            spanstyle: { color: 'black' }, // span樣式
            value: 'a', // 輸入框值
            disabled: false,
            mainstyle: {}, // 輸入框樣式
            change: e => {
                console.log(e)
            }, // 輸入框變動事件
            notice: 'Please select model type and plant area first',
            star: true,
            radioData: ['a', 'b', 'c']
        }
    ],
    myData: {
        page: {
            pageIndex: 0,
            pageSize: 18,
            totalCount: 18,
            totalPage: 1,
            hasPrev: false,
            hasNext: false
        },
        code: 'Sucess',
        message: 'Select Env Info Report Sucess',
        result: [
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '03um',
                id: '0',
                lyz: 31000000,
                uyz: 35000000,
                l0: 0,
                l1: 0,
                l2: 35000200,
                l3: 0,
                l4: 30000000,
                l5: 0,
                l6: 0,
                l7: 0,
                l8: 0,
                l9: 0,
                l10: 0,
                l11: 0,
                l12: 0,
                l13: 0,
                l14: 0,
                l15: 0,
                l16: 0,
                l17: 24264090,
                l18: 26615000,
                l19: 20906100,
                l20: 19608270,
                l21: 19481410,
                l22: 19941400,
                l23: 20164240,
                l24: 19955330,
                l25: 22492600,
                l26: 16511670,
                l27: 16142990,
                l28: 17796180,
                l29: 20699990,
                l30: 20706700,
                l31: 18705720,
                l32: 18636860,
                l33: 19112010,
                l34: 19009990,
                l35: 21442150,
                l36: 21107060,
                l37: 19131980,
                l38: 19408980,
                l39: 19510490,
                l40: 18507470,
                l41: 17841220,
                l42: 20523790,
                l43: 23142290,
                l44: 27603880,
                l45: 24678040,
                l46: 23267880,
                l47: 26076960,
                work_Date: '2020/03/17'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '05um',
                id: '1',
                lyz: 7000000,
                uyz: 8500000,
                l0: 0,
                l1: 0,
                l2: 0,
                l3: 0,
                l4: 0,
                l5: 0,
                l6: 0,
                l7: 0,
                l8: 0,
                l9: 0,
                l10: 0,
                l11: 0,
                l12: 0,
                l13: 0,
                l14: 0,
                l15: 0,
                l16: 0,
                l17: 6866428,
                l18: 7737834,
                l19: 6273914,
                l20: 5998062,
                l21: 5914526,
                l22: 5987087,
                l23: 6076679,
                l24: 6194477,
                l25: 6373902,
                l26: 4571809,
                l27: 4507550,
                l28: 5155200,
                l29: 6286797,
                l30: 6209055,
                l31: 5621995,
                l32: 5807845,
                l33: 5817621,
                l34: 5786835,
                l35: 6258600,
                l36: 6262005,
                l37: 5697293,
                l38: 5727240,
                l39: 5622695,
                l40: 5317141,
                l41: 5098593,
                l42: 5880437,
                l43: 6448448,
                l44: 7915611,
                l45: 7381776,
                l46: 6622184,
                l47: 7131945,
                work_Date: '2020/03/17'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '10um',
                id: '2',
                lyz: 2000000,
                uyz: 4000000,
                l0: 0,
                l1: 0,
                l2: 0,
                l3: 0,
                l4: 0,
                l5: 0,
                l6: 0,
                l7: 0,
                l8: 0,
                l9: 0,
                l10: 0,
                l11: 0,
                l12: 0,
                l13: 0,
                l14: 0,
                l15: 0,
                l16: 0,
                l17: 2264120,
                l18: 2774984,
                l19: 2365324,
                l20: 2310628,
                l21: 2242263,
                l22: 2137109,
                l23: 2250704,
                l24: 2242739,
                l25: 2317562,
                l26: 1423699,
                l27: 1405295,
                l28: 1751016,
                l29: 2271878,
                l30: 2257562,
                l31: 2011876,
                l32: 2223017,
                l33: 2136878,
                l34: 2097967,
                l35: 2258017,
                l36: 2293128,
                l37: 1961486,
                l38: 2025038,
                l39: 1872716,
                l40: 1850747,
                l41: 1700816,
                l42: 2024567,
                l43: 2031049,
                l44: 2637358,
                l45: 2477561,
                l46: 2157226,
                l47: 2347798,
                work_Date: '2020/03/17'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '50um',
                id: '3',
                lyz: 50000,
                uyz: 70000,
                l0: 0,
                l1: 0,
                l2: 0,
                l3: 0,
                l4: 0,
                l5: 0,
                l6: 0,
                l7: 0,
                l8: 0,
                l9: 0,
                l10: 0,
                l11: 0,
                l12: 0,
                l13: 0,
                l14: 0,
                l15: 0,
                l16: 0,
                l17: 46249,
                l18: 78029,
                l19: 61403,
                l20: 69062,
                l21: 55875,
                l22: 53560,
                l23: 72009,
                l24: 69942,
                l25: 42424,
                l26: 19964,
                l27: 15246,
                l28: 38318,
                l29: 45349,
                l30: 51514,
                l31: 49766,
                l32: 62787,
                l33: 55335,
                l34: 53535,
                l35: 76363,
                l36: 54704,
                l37: 32441,
                l38: 48080,
                l39: 30302,
                l40: 33585,
                l41: 26997,
                l42: 44780,
                l43: 31818,
                l44: 38888,
                l45: 42424,
                l46: 32996,
                l47: 51514,
                work_Date: '2020/03/17'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: 'TEMP',
                id: '4',
                lyz: 20,
                uyz: 45,
                l0: 0,
                l1: 0,
                l2: 0,
                l3: 0,
                l4: 0,
                l5: 0,
                l6: 0,
                l7: 0,
                l8: 0,
                l9: 0,
                l10: 0,
                l11: 0,
                l12: 0,
                l13: 0,
                l14: 0,
                l15: 0,
                l16: 0,
                l17: 27,
                l18: 27,
                l19: 27,
                l20: 27,
                l21: 27,
                l22: 28,
                l23: 28,
                l24: 27,
                l25: 27,
                l26: 28,
                l27: 29,
                l28: 28,
                l29: 28,
                l30: 28,
                l31: 28,
                l32: 28,
                l33: 28,
                l34: 29,
                l35: 29,
                l36: 28,
                l37: 29,
                l38: 29,
                l39: 29,
                l40: 28,
                l41: 28,
                l42: 28,
                l43: 28,
                l44: 28,
                l45: 28,
                l46: 28,
                l47: 28,
                work_Date: '2020/03/17'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: 'HUM',
                id: '5',
                lyz: 20,
                uyz: 70,
                l0: 0,
                l1: 0,
                l2: 0,
                l3: 0,
                l4: 0,
                l5: 0,
                l6: 0,
                l7: 0,
                l8: 0,
                l9: 0,
                l10: 0,
                l11: 0,
                l12: 0,
                l13: 0,
                l14: 0,
                l15: 0,
                l16: 0,
                l17: 53,
                l18: 53,
                l19: 52,
                l20: 50,
                l21: 50,
                l22: 49,
                l23: 49,
                l24: 52,
                l25: 55,
                l26: 53,
                l27: 49,
                l28: 53,
                l29: 51,
                l30: 51,
                l31: 51,
                l32: 51,
                l33: 51,
                l34: 50,
                l35: 50,
                l36: 51,
                l37: 50,
                l38: 50,
                l39: 50,
                l40: 51,
                l41: 51,
                l42: 50,
                l43: 51,
                l44: 51,
                l45: 51,
                l46: 51,
                l47: 51,
                work_Date: '2020/03/17'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '03um',
                id: '6',
                lyz: 31000000,
                uyz: 35000000,
                l0: 27735200,
                l1: 26688740,
                l2: 31128780,
                l3: 36566790,
                l4: 35517640,
                l5: 34328090,
                l6: 29150500,
                l7: 27115650,
                l8: 27679830,
                l9: 27138710,
                l10: 27977080,
                l11: 28168060,
                l12: 30651340,
                l13: 26258860,
                l14: 36238260,
                l15: 36908880,
                l16: 39167960,
                l17: 40342100,
                l18: 42480560,
                l19: 40453340,
                l20: 40231380,
                l21: 44009780,
                l22: 41648580,
                l23: 40368130,
                l24: 43239780,
                l25: 39199780,
                l26: 27353380,
                l27: 27888200,
                l28: 22762830,
                l29: 25164060,
                l30: 15893440,
                l31: 12947480,
                l32: 16030490,
                l33: 14848400,
                l34: 15951420,
                l35: 13790830,
                l36: 11836300,
                l37: 11316600,
                l38: 12331240,
                l39: 15878700,
                l40: 23092460,
                l41: 23257440,
                l42: 26785700,
                l43: 34091720,
                l44: 29052020,
                l45: 31770100,
                l46: 33437540,
                l47: 40039630,
                work_Date: '2020/03/18'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '05um',
                id: '7',
                lyz: 7000000,
                uyz: 8500000,
                l0: 7586825,
                l1: 7165615,
                l2: 8388167,
                l3: 9688833,
                l4: 9563918,
                l5: 9040689,
                l6: 7631103,
                l7: 7096121,
                l8: 7169656,
                l9: 6935951,
                l10: 7075937,
                l11: 7233785,
                l12: 7673188,
                l13: 6767688,
                l14: 9139108,
                l15: 9508708,
                l16: 10116950,
                l17: 10357070,
                l18: 10928680,
                l19: 10561520,
                l20: 10693680,
                l21: 11469110,
                l22: 10546290,
                l23: 10214850,
                l24: 10908270,
                l25: 9571432,
                l26: 6610063,
                l27: 6279868,
                l28: 5220508,
                l29: 5516445,
                l30: 3673918,
                l31: 2896253,
                l32: 3756452,
                l33: 3623009,
                l34: 3900651,
                l35: 3360586,
                l36: 2825438,
                l37: 2789378,
                l38: 3071699,
                l39: 3832301,
                l40: 5892558,
                l41: 5829596,
                l42: 6645416,
                l43: 8578402,
                l44: 7571673,
                l45: 8382503,
                l46: 9081210,
                l47: 9831941,
                work_Date: '2020/03/18'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '10um',
                id: '8',
                lyz: 2000000,
                uyz: 4000000,
                l0: 2465979,
                l1: 2330626,
                l2: 2714799,
                l3: 3034326,
                l4: 3016481,
                l5: 2856549,
                l6: 2427556,
                l7: 2233977,
                l8: 2235671,
                l9: 2168833,
                l10: 2202576,
                l11: 2291389,
                l12: 2334835,
                l13: 2076654,
                l14: 2775508,
                l15: 2927256,
                l16: 2980286,
                l17: 3056399,
                l18: 3337997,
                l19: 3211223,
                l20: 3315435,
                l21: 3127672,
                l22: 2799984,
                l23: 2844104,
                l24: 2998846,
                l25: 2600398,
                l26: 1695949,
                l27: 1517216,
                l28: 1298645,
                l29: 1316469,
                l30: 923429,
                l31: 797897,
                l32: 983465,
                l33: 969388,
                l34: 1032317,
                l35: 990903,
                l36: 716965,
                l37: 821965,
                l38: 873395,
                l39: 1060263,
                l40: 1619182,
                l41: 1586522,
                l42: 1752178,
                l43: 2295946,
                l44: 1992917,
                l45: 2248814,
                l46: 2494531,
                l47: 2602964,
                work_Date: '2020/03/18'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '50um',
                id: '9',
                lyz: 50000,
                uyz: 70000,
                l0: 58922,
                l1: 48821,
                l2: 60942,
                l3: 83164,
                l4: 65656,
                l5: 69359,
                l6: 49726,
                l7: 45605,
                l8: 50469,
                l9: 42424,
                l10: 40109,
                l11: 61169,
                l12: 53030,
                l13: 38181,
                l14: 63092,
                l15: 69368,
                l16: 66582,
                l17: 69250,
                l18: 87419,
                l19: 87585,
                l20: 80605,
                l21: 29257,
                l22: 18855,
                l23: 22908,
                l24: 22095,
                l25: 23140,
                l26: 15151,
                l27: 12280,
                l28: 11784,
                l29: 15909,
                l30: 12727,
                l31: 22843,
                l32: 15426,
                l33: 23333,
                l34: 21212,
                l35: 21212,
                l36: 16969,
                l37: 37121,
                l38: 18855,
                l39: 16161,
                l40: 31649,
                l41: 17508,
                l42: 19528,
                l43: 35353,
                l44: 21548,
                l45: 22922,
                l46: 28989,
                l47: 35952,
                work_Date: '2020/03/18'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: 'TEMP',
                id: '10',
                lyz: 20,
                uyz: 45,
                l0: 27,
                l1: 27,
                l2: 26,
                l3: 26,
                l4: 26,
                l5: 26,
                l6: 27,
                l7: 27,
                l8: 28,
                l9: 28,
                l10: 27,
                l11: 27,
                l12: 26,
                l13: 27,
                l14: 26,
                l15: 27,
                l16: 26,
                l17: 26,
                l18: 26,
                l19: 27,
                l20: 27,
                l21: 26,
                l22: 27,
                l23: 27,
                l24: 27,
                l25: 27,
                l26: 29,
                l27: 29,
                l28: 29,
                l29: 29,
                l30: 29,
                l31: 29,
                l32: 29,
                l33: 29,
                l34: 29,
                l35: 29,
                l36: 30,
                l37: 30,
                l38: 30,
                l39: 29,
                l40: 29,
                l41: 29,
                l42: 29,
                l43: 28,
                l44: 29,
                l45: 29,
                l46: 29,
                l47: 29,
                work_Date: '2020/03/18'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: 'HUM',
                id: '11',
                lyz: 20,
                uyz: 70,
                l0: 53,
                l1: 53,
                l2: 55,
                l3: 54,
                l4: 55,
                l5: 55,
                l6: 52,
                l7: 52,
                l8: 51,
                l9: 51,
                l10: 52,
                l11: 52,
                l12: 54,
                l13: 51,
                l14: 55,
                l15: 53,
                l16: 55,
                l17: 57,
                l18: 58,
                l19: 54,
                l20: 55,
                l21: 60,
                l22: 58,
                l23: 57,
                l24: 57,
                l25: 58,
                l26: 54,
                l27: 54,
                l28: 54,
                l29: 55,
                l30: 54,
                l31: 54,
                l32: 55,
                l33: 54,
                l34: 54,
                l35: 53,
                l36: 52,
                l37: 51,
                l38: 51,
                l39: 53,
                l40: 53,
                l41: 53,
                l42: 54,
                l43: 55,
                l44: 54,
                l45: 54,
                l46: 53,
                l47: 55,
                work_Date: '2020/03/18'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '03um',
                id: '12',
                lyz: 31000000,
                uyz: 35000000,
                l0: 36022070,
                l1: 41183480,
                l2: 37517740,
                l3: 45839620,
                l4: 42026660,
                l5: 45726710,
                l6: 38313340,
                l7: 48491780,
                l8: 41744000,
                l9: 42355370,
                l10: 46043960,
                l11: 48003460,
                l12: 41693280,
                l13: 40472500,
                l14: 31243640,
                l15: 45232820,
                l16: 29612870,
                l17: 35869490,
                l18: 34710910,
                l19: 27952700,
                l20: 26023380,
                l21: 35291110,
                l22: 35963430,
                l23: 41465920,
                l24: 45443820,
                l25: 41648580,
                l26: 37325160,
                l27: 12380740,
                l28: 6384812,
                l29: 10799940,
                l30: 9424525,
                l31: 13632250,
                l32: 8970992,
                l33: 8561903,
                l34: 12802960,
                l35: 12663900,
                l36: 11552670,
                l37: 11756320,
                l38: 13690370,
                l39: 23999920,
                l40: 26207430,
                l41: 19948540,
                l42: 19310810,
                l43: 20722610,
                l44: 41622180,
                l45: 46856760,
                l46: 54270040,
                l47: 35939020,
                work_Date: '2020/03/19'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '05um',
                id: '13',
                lyz: 7000000,
                uyz: 8500000,
                l0: 8691337,
                l1: 9748050,
                l2: 8907075,
                l3: 10517210,
                l4: 9536604,
                l5: 10139340,
                l6: 8470844,
                l7: 10717220,
                l8: 9302977,
                l9: 9071249,
                l10: 9841042,
                l11: 10189540,
                l12: 8788351,
                l13: 8605001,
                l14: 6900426,
                l15: 10107520,
                l16: 6454903,
                l17: 7722178,
                l18: 7323190,
                l19: 6090200,
                l20: 5597472,
                l21: 7849854,
                l22: 8412073,
                l23: 10033280,
                l24: 11300210,
                l25: 9092877,
                l26: 8113590,
                l27: 2633823,
                l28: 1336356,
                l29: 2099651,
                l30: 2034668,
                l31: 2951161,
                l32: 2381131,
                l33: 2336686,
                l34: 3165301,
                l35: 3341395,
                l36: 2915965,
                l37: 2957161,
                l38: 3355091,
                l39: 5716634,
                l40: 6302236,
                l41: 4448349,
                l42: 4091942,
                l43: 4456035,
                l44: 9123281,
                l45: 10193730,
                l46: 11445880,
                l47: 7491371,
                work_Date: '2020/03/19'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '10um',
                id: '14',
                lyz: 2000000,
                uyz: 4000000,
                l0: 2237307,
                l1: 2495061,
                l2: 2264970,
                l3: 2594276,
                l4: 2286239,
                l5: 2398546,
                l6: 1958202,
                l7: 2485817,
                l8: 2161805,
                l9: 2046334,
                l10: 2137771,
                l11: 2231502,
                l12: 1970521,
                l13: 1939719,
                l14: 1647193,
                l15: 2371324,
                l16: 1507896,
                l17: 1853524,
                l18: 1710091,
                l19: 1496624,
                l20: 1427442,
                l21: 1879383,
                l22: 2033321,
                l23: 2607308,
                l24: 2894473,
                l25: 2090560,
                l26: 1842792,
                l27: 601006,
                l28: 352119,
                l29: 501007,
                l30: 507741,
                l31: 720197,
                l32: 688884,
                l33: 650501,
                l34: 836695,
                l35: 998984,
                l36: 830689,
                l37: 811619,
                l38: 918587,
                l39: 1435467,
                l40: 1574991,
                l41: 1054043,
                l42: 920502,
                l43: 977267,
                l44: 1866125,
                l45: 1963469,
                l46: 2181396,
                l47: 1473644,
                work_Date: '2020/03/19'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: '50um',
                id: '15',
                lyz: 50000,
                uyz: 70000,
                l0: 24933,
                l1: 26893,
                l2: 24354,
                l3: 30584,
                l4: 24316,
                l5: 22802,
                l6: 14513,
                l7: 25225,
                l8: 21212,
                l9: 19340,
                l10: 15909,
                l11: 24040,
                l12: 19017,
                l13: 24354,
                l14: 17132,
                l15: 21212,
                l16: 21212,
                l17: 57575,
                l18: 23232,
                l19: 27104,
                l20: 17468,
                l21: 24040,
                l22: 31818,
                l23: 38888,
                l24: 32782,
                l25: 14141,
                l26: 13257,
                l27: 0,
                l28: 8484,
                l29: 10774,
                l30: 8080,
                l31: 15488,
                l32: 13467,
                l33: 11784,
                l34: 11447,
                l35: 19865,
                l36: 11290,
                l37: 12518,
                l38: 8988,
                l39: 15726,
                l40: 15530,
                l41: 11955,
                l42: 11839,
                l43: 7070,
                l44: 14848,
                l45: 16316,
                l46: 16052,
                l47: 9427,
                work_Date: '2020/03/19'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: 'TEMP',
                id: '16',
                lyz: 20,
                uyz: 45,
                l0: 28,
                l1: 28,
                l2: 28,
                l3: 28,
                l4: 27,
                l5: 28,
                l6: 28,
                l7: 27,
                l8: 28,
                l9: 28,
                l10: 27,
                l11: 27,
                l12: 27,
                l13: 27,
                l14: 28,
                l15: 28,
                l16: 28,
                l17: 28,
                l18: 29,
                l19: 29,
                l20: 29,
                l21: 28,
                l22: 29,
                l23: 29,
                l24: 28,
                l25: 26,
                l26: 26,
                l27: 25,
                l28: 25,
                l29: 26,
                l30: 27,
                l31: 28,
                l32: 27,
                l33: 28,
                l34: 28,
                l35: 27,
                l36: 27,
                l37: 27,
                l38: 28,
                l39: 27,
                l40: 26,
                l41: 25,
                l42: 25,
                l43: 26,
                l44: 26,
                l45: 25,
                l46: 25,
                l47: 26,
                work_Date: '2020/03/19'
            },
            {
                process_Name: 'Apollo',
                floor_Name: 'C04-3F',
                line_Name: 'RIM-1',
                station_Code: 'Incoming',
                date_type: 'HUM',
                id: '17',
                lyz: 20,
                uyz: 70,
                l0: 55,
                l1: 57,
                l2: 55,
                l3: 57,
                l4: 58,
                l5: 57,
                l6: 57,
                l7: 60,
                l8: 58,
                l9: 57,
                l10: 58,
                l11: 58,
                l12: 57,
                l13: 58,
                l14: 55,
                l15: 57,
                l16: 56,
                l17: 56,
                l18: 55,
                l19: 54,
                l20: 53,
                l21: 55,
                l22: 56,
                l23: 57,
                l24: 58,
                l25: 64,
                l26: 65,
                l27: 66,
                l28: 65,
                l29: 62,
                l30: 59,
                l31: 58,
                l32: 60,
                l33: 58,
                l34: 58,
                l35: 59,
                l36: 58,
                l37: 58,
                l38: 57,
                l39: 59,
                l40: 60,
                l41: 62,
                l42: 62,
                l43: 61,
                l44: 61,
                l45: 65,
                l46: 64,
                l47: 61,
                work_Date: '2020/03/19'
            }
        ]
    }
}