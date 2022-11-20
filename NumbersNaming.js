class NumbersNamer {
    constructor(number) {
        //а́е́и́о́у́ы́э́ю́я́
        this._number = number;
        this.DICT = []
        this.G_DICT = [];
        this._setDictNominative();
        this._setDictGenetive();        
    }

    _setDictNominative(){
        this.DICT[0] = 'ноль';
        this.DICT[1] = 'один';
        this.DICT[2] = 'два';
        this.DICT[3] = 'три';
        this.DICT[4] = 'четыре';
        this.DICT[5] = 'пять';
        this.DICT[6] = 'шесть';
        this.DICT[7] = 'семь';
        this.DICT[8] = 'восемь';
        this.DICT[9] = 'девять';
        this.DICT[10] = 'десять';
        this.DICT[11] = 'одиннадцать';
        this.DICT[12] = 'двенадцать';
        this.DICT[13] = 'тринадцать';
        this.DICT[14] = 'четырнадцать';
        this.DICT[15] = 'пятнадцать';
        this.DICT[16] = 'шестнадцать';
        this.DICT[17] = 'семнадцать';
        this.DICT[18] = 'восемнадцать';
        this.DICT[19] = 'девятнадцать';
        this.DICT[20] = 'двадцать';
        this.DICT[30] = 'тридцать';
        this.DICT[40] = 'сорок';
        this.DICT[50] = 'пятьдесят';
        this.DICT[60] = 'шестьдесят';
        this.DICT[70] = 'семьдесят';
        this.DICT[80] = 'восемьдесят';
        this.DICT[90] = 'девяносто';
        this.DICT[100] = 'сто';
        this.DICT[200] = 'двести';
        this.DICT[300] = 'триста';
        this.DICT[400] = 'четыреста';
        this.DICT[500] = 'пятьсот';
        this.DICT[600] = 'шестьсот';
        this.DICT[700] = 'семьсот';
        this.DICT[800] = 'восемьсот';
        this.DICT[900] = 'девятьсот';
        this.DICT[1000] = 'тысяча';
        this.DICT[1000000] = 'миллион';
    }
    
    _setDictGenetive() {
        this.G_DICT[0] = 'ноля';
        this.G_DICT[1] = 'одного';
        this.G_DICT[2] = 'двух';
        this.G_DICT[3] = 'трёх';
        this.G_DICT[4] = 'четырёх';
        this.G_DICT[5] = 'пяти';
        this.G_DICT[6] = 'шести';
        this.G_DICT[7] = 'семи';
        this.G_DICT[8] = 'восьми';
        this.G_DICT[9] = 'девяти';
        this.G_DICT[10] = 'десяти';
        this.G_DICT[11] = 'одиннадцати';
        this.G_DICT[12] = 'двенадцати';
        this.G_DICT[13] = 'тринадцати';
        this.G_DICT[14] = 'четырнадцати';
        this.G_DICT[15] = 'пятнадцати';
        this.G_DICT[16] = 'шестнадцати';
        this.G_DICT[17] = 'семнадцати';
        this.G_DICT[18] = 'восемнадцати';
        this.G_DICT[19] = 'девятнадцати';
        this.G_DICT[20] = 'двадцати';
        this.G_DICT[30] = 'тридцати';
        this.G_DICT[40] = 'сорока';
        this.G_DICT[50] = 'пятидесяти';
        this.G_DICT[60] = 'шестидесяти';
        this.G_DICT[70] = 'семидесяти';
        this.G_DICT[80] = 'восьмидесят';
        this.G_DICT[90] = 'девяноста';
        this.G_DICT[100] = 'ста';
        this.G_DICT[200] = 'двухсот';
        this.G_DICT[300] = 'трёхсот';
        this.G_DICT[400] = 'четырёхсот';
        this.G_DICT[500] = 'пятисот';
        this.G_DICT[600] = 'шестисот';
        this.G_DICT[700] = 'семисот';
        this.G_DICT[800] = 'восьмисот';
        this.G_DICT[900] = 'девятисот';
        this.G_DICT[1000] = 'тысяч';
        this.G_DICT[1000000] = 'миллионов';
    }

    //maculine nominative
    _mn(number) {
        return this.DICT[number];
    }

    //feminine nominative
    _fn(number) {
        if (number == 1) {
            return 'одна';
        }
        if (number == 2) {
            return 'две';
        }        

        return this._mn(number);
    }

    //neutral nominative
    _nn(number) {
        if (number == 1) {
            return 'одно';
        } 
        return this._mn(number);
    }

    //maculine genetive
    _mg(number) {
        return this.G_DICT[number];
    }

    _fg(number) {
        if (number == 1) {
            return 'одной';
        }

        return this.G_DICT[number];
    }

    _ng(number) {
        return this.G_DICT[number];
    }

    _literalNominative(number, gender = 'm') {
        return {
            'm': (n,g)=>{ return this._mn(n,g); },
            'f': (n,g)=>{ return this._fn(n,g); },
            'n': (n,g)=>{ return this._nn(n,g); },
        }[gender](number);
    }

    //_literalGenetive()

    getNominative(number, gender = 'm') {
        let n = number;

        if (n==0) {
            return this._literalNominative(n,gender);
        }

        if (n <= 20) {
            return this._literalNominative(n, gender);
            //return gender=='m'? this._mn(n): this._fn(n);
        }

        if ((n <= 100) && (n % 10 == 0)) {
            return gender=='m'? this._mn(n): this._fn(n);
        }

        if (n <=100) {
            let decs = n - n % 10;
            let ones = n % 10;
            let decsLiteral = this._literalNominative(decs, gender);
            let onesLiteral = this._literalNominative(ones, gender);
            return `${decsLiteral} ${onesLiteral}`; 
        }

        if ((n < 1000) && (n % 100 == 0)) {
            return this._literalNominative(n, gender);
        }

        if (n < 1000) {
            let thousands = n - n%100;
            let ones = n % 100;
            let thousandsLiteral = this._literalNominative(thousands);
            let onesLiteral = this.getNominative(ones, gender);
            return `${thousandsLiteral} ${onesLiteral}`;
        }

        if (n==1000) {
            return 'тысяча';
        }

        if (n < 2000) {
            return `тысяча ${this.getNominative(n%1000, gender)}`;
        }

        if (n<1000000) {
            let ones = n % 1000; 
            let thousands = (n - n % 1000)/1000;
            let onesLiteral = this.getNominative(ones, gender);
            let thousandsLiteral = this.getNominative(thousands, 'f');
            let tisiacha = '';
            if ((thousands % 10 ==1) && (thousands % 100 != 11))
            {
                tisiacha = 'тысяча';
            }
            else if([2,3,4].includes(thousands % 10) && ![12,13,14].includes(thousands % 100)){
                tisiacha = 'тысячи';
            }
            else {
                tisiacha = 'тысяч';
            }

            return `${thousandsLiteral} ${tisiacha} ${onesLiteral}`;
        }

        if (n==1000*1000) {
            return 'миллион';
        }

        if (n<2*1000*1000) {
            return `миллион ${this.getNominative(n%1000000,gender)}`;
        }

        if (n<1000*1000 * 1000*1000) {
            let millions = (n - n % (1000*1000)) / (1000*1000);
            let ones = n % (1000*1000);
            let millionsLiteral = this.getNominative(millions, 'm');
            let onesLiteral = this.getNominative(ones, gender);
            
            let millionWord = '';
            if ((millions % 10 ==1) && (millions % 100 != 11))
            {
                millionWord = 'миллион';
            }
            else if([2,3,4].includes(millions % 10) && ![12,13,14].includes(millions % 100)){
                millionWord = 'миллиона';
            }
            else {
                millionWord = 'миллионов';
            }

            return `${millionsLiteral} ${millionWord} ${onesLiteral}`;
        }
    } 


}