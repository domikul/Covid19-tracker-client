import {CovidCasesService} from '../_services/covid-cases.service';

export class CountryInterpreter {
  private _countryNamesMapPlEn;
  private _countryNamesMapEnPl;
  constructor() {
    this._countryNamesMapPlEn = new Map([
      ['Afganistan', 'Afghanistan'],
      ['Albania', 'Albania'],
      ['Algieria', 'Algeria'],
      ['Andora', 'Andorra'],
      ['Angola', 'Angola'],
      ['Antigua i Barbuda', 'Antigua and Barbuda'],
      ['Argentyna', 'Argentina'],
      ['Armenia', 'Armenia'],
      ['Australia', 'Australia'],
      ['Austria', 'Austria'],
      ['Azerbejdżan', 'Azerbaijan'],
      ['Bahamy', 'Bahamas'],
      ['Bahrajn', 'Bahrain'],
      ['Bangladesz', 'Bangladesh'],
      ['Barbados', 'Barbados'],
      ['Białoruś', 'Belarus'],
      ['Belgia', 'Belgium'],
      ['Belize', 'Belize'],
      ['Benin', 'Benin'],
      ['Bhutan', 'Bhutan'],
      ['Boliwia', 'Bolivia'],
      ['Bośnia i Hercegowina', 'Bosnia and Herzegovina'],
      ['Botswana', 'Botswana'],
      ['Brazylia', 'Brazil'],
      ['Brunei Darussalam', 'Brunei'],
      ['Bułgaria', 'Bulgaria'],
      ['Burkina Faso', 'Burkina Faso'],
      ['Mjanma (Birma)', 'Burma'],
      ['Burundi', 'Burundi'],
      ['Wyspy Zielonego Przylądka', 'Cabo Verde'],
      ['Kambodża', 'Cambodia'],
      ['Kamerun', 'Cameroon'],
      ['Kanada', 'Canada'],
      ['Republika Środkowoafrykańska', 'Central African Republic'],
      ['Czad', 'Chad'],
      ['Chile', 'Chile'],
      ['Chiny', 'China'],
      ['Kolumbia', 'Colombia'],
      ['Komory', 'Comoros'],
      ['Kongo', 'Congo (Brazzaville)'],
      ['Demokratyczna Republika Konga', 'Congo (Kinshasa)'],
      ['Kostaryka', 'Costa Rica'],
      ['Wybrzeże Kości Słoniowej', 'Cote d\'Ivoire'],
      ['Chorwacja', 'Croatia'],
      ['Kuba', 'Cuba'],
      ['Cypr', 'Cyprus'],
      ['Czechy', 'Czechia'],
      ['Dania', 'Denmark'],
      ['Diamond Princess', 'Diamond Princess'],
      ['Dżibuti', 'Djibouti'],
      ['Dominikana', 'Dominican Republic'],
      ['Dominika', 'Dominica'],
      ['Ekwador', 'Ecuador'],
      ['Egipt', 'Egypt'],
      ['Salwador', 'El Salvador'],
      ['Gwinea Równikowa', 'Equatorial Guinea'],
      ['Erytrea', 'Eritrea'],
      ['Estonia', 'Estonia'],
      ['Suazi', 'Eswatini'],
      ['Etiopia', 'Ethiopia'],
      ['Fidżi', 'Fiji'],
      ['Finlandia', 'Finland'],
      ['Francja', 'France'],
      ['Gabon', 'Gabon'],
      ['Gambia', 'Gambia'],
      ['Gruzja', 'Georgia'],
      ['Niemcy', 'Germany'],
      ['Ghana', 'Ghana'],
      ['Grecja', 'Greece'],
      ['Grenada', 'Grenada'],
      ['Gwatemala', 'Guatemala'],
      ['Gwinea', 'Guinea'],
      ['Gwinea Bissau', 'Guinea-Bissau'],
      ['Gujana', 'Guyana'],
      ['Haiti', 'Haiti'],
      ['Watykan', 'Holy See'],
      ['Honduras', 'Honduras'],
      ['Węgry', 'Hungary'],
      ['Islandia', 'Iceland'],
      ['Indie', 'India'],
      ['Indonezja', 'Indonesia'],
      ['Iran', 'Iran'],
      ['Irak', 'Iraq'],
      ['Irlandia', 'Ireland'],
      ['Izrael', 'Israel'],
      ['Włochy', 'Italy'],
      ['Jamajka', 'Jamaica'],
      ['Japonia', 'Japan'],
      ['Jordania', 'Jordan'],
      ['Kazachstan', 'Kazakhstan'],
      ['Kenia', 'Kenya'],
      ['Korea Południowa', 'Korea, South'],
      ['Kosowo', 'Kosovo'],
      ['Kuwejt', 'Kuwait'],
      ['Kirgistan', 'Kyrgyzstan'],
      ['Laos', 'Laos'],
      ['Łotwa', 'Latvia'],
      ['Liban', 'Lebanon'],
      ['Lesotho', 'Lesotho'],
      ['Liberia', 'Liberia'],
      ['Libia', 'Libya'],
      ['Liechtenstein', 'Liechtenstein'],
      ['Litwa', 'Lithuania'],
      ['Luksemburg', 'Luxembourg'],
      ['MS Zaandam', 'MS Zaandam'],
      ['Madagaskar', 'Madagascar'],
      ['Malawi', 'Malawi'],
      ['Malezja', 'Malaysia'],
      ['Malediwy', 'Maldives'],
      ['Mali', 'Mali'],
      ['Malta', 'Malta'],
      ['Mauretania', 'Mauritania'],
      ['Mauritius', 'Mauritius'],
      ['Meksyk', 'Mexico'],
      ['Mołdawia', 'Moldova'],
      ['Monako', 'Monaco'],
      ['Mongolia', 'Mongolia'],
      ['Czarnogóra', 'Montenegro'],
      ['Maroko', 'Morocco'],
      ['Mozambik', 'Mozambique'],
      ['Namibia', 'Namibia'],
      ['Nepal', 'Nepal'],
      ['Holandia', 'Netherlands'],
      ['Nowa Zelandia', 'New Zealand'],
      ['Nikaragua', 'Nicaragua'],
      ['Nigeria', 'Nigeria'],
      ['Niger', 'Niger'],
      ['Macedonia (BJRM)', 'North Macedonia'],
      ['Norwegia', 'Norway'],
      ['Oman', 'Oman'],
      ['Pakistan', 'Pakistan'],
      ['Panama', 'Panama'],
      ['Papua-Nowa Gwinea', 'Papua New Guinea'],
      ['Paragwaj', 'Paraguay'],
      ['Peru', 'Peru'],
      ['Filipiny', 'Philippines'],
      ['Polska', 'Poland'],
      ['Portugalia', 'Portugal'],
      ['Katar', 'Qatar'],
      ['Rumunia', 'Romania'],
      ['Rosja', 'Russia'],
      ['Rwanda', 'Rwanda'],
      ['Saint Kitts i Nevis', 'Saint Kitts and Nevis'],
      ['Saint Lucia', 'Saint Lucia'],
      ['Saint Vincent i Grenadyny', 'Saint Vincent and the Grenadines'],
      ['San Marino', 'San Marino'],
      ['Wyspy Świętego Tomasza i Książęca', 'Sao Tome and Principe'],
      ['Arabia Saudyjska', 'Saudi Arabia'],
      ['Senegal', 'Senegal'],
      ['Serbia', 'Serbia'],
      ['Seszele', 'Seychelles'],
      ['Sierra Leone', 'Sierra Leone'],
      ['Singapur', 'Singapore'],
      ['Słowacja', 'Slovakia'],
      ['Słowenia', 'Slovenia'],
      ['Wyspy Salomona', 'Solomon Islands'],
      ['Somalia', 'Somalia'],
      ['Republika Południowej Afryki', 'South Africa'],
      ['Sudan Południowy', 'South Sudan'],
      ['Hiszpania', 'Spain'],
      ['Sri Lanka', 'Sri Lanka'],
      ['Sudan', 'Sudan'],
      ['Surinam', 'Suriname'],
      ['Szwecja', 'Sweden'],
      ['Szwajcaria', 'Switzerland'],
      ['Syria', 'Syria'],
      ['Tajwan', 'Taiwan*'],
      ['Tadżykistan', 'Tajikistan'],
      ['Tanzania', 'Tanzania'],
      ['Tajlandia', 'Thailand'],
      ['Timor Wschodni', 'Timor-Leste'],
      ['Togo', 'Togo'],
      ['Trynidad i Tobago', 'Trinidad and Tobago'],
      ['Tunezja', 'Tunisia'],
      ['Turcja', 'Turkey'],
      ['Stany Zjednoczone', 'US'],
      ['Uganda', 'Uganda'],
      ['Ukraina', 'Ukraine'],
      ['Zjednoczone Emiraty Arabskie', 'United Arab Emirates'],
      ['Wielka Brytania', 'United Kingdom'],
      ['Urugwaj', 'Uruguay'],
      ['Uzbekistan', 'Uzbekistan'],
      ['Wenezuela', 'Venezuela'],
      ['Wietnam', 'Vietnam'],
      ['Zachodni Brzeg', 'West Bank and Gaza'],
      ['Sahara Zachodnia', 'Western Sahara'],
      ['Jemen', 'Yemen'],
      ['Zambia', 'Zambia'],
      ['Zimbabwe', 'Zimbabwe']
    ]);

    this._countryNamesMapEnPl = new Map([
      ['Afghanistan', 'Afganistan'],
      ['Albania', 'Albania'],
      ['Algeria', 'Algieria'],
      ['Andorra', 'Andora'],
      ['Angola', 'Angola'],
      ['Antigua and Barbuda', 'Antigua i Barbuda'],
      ['Argentina', 'Argentyna'],
      ['Armenia', 'Armenia'],
      ['Australia', 'Australia'],
      ['Austria', 'Austria'],
      ['Azerbaijan', 'Azerbejdżan'],
      ['Bahamas', 'Bahamy'],
      ['Bahrain', 'Bahrajn'],
      ['Bangladesh', 'Bangladesz'],
      ['Barbados', 'Barbados'],
      ['Belarus', 'Białoruś'],
      ['Belgium', 'Belgia'],
      ['Belize', 'Belize'],
      ['Benin', 'Benin'],
      ['Bhutan', 'Bhutan'],
      ['Bolivia', 'Boliwia'],
      ['Bosnia and Herzegovina', 'Bośnia i Hercegowina'],
      ['Botswana', 'Botswana'],
      ['Brazil', 'Brazylia'],
      ['Brunei', 'Brunei Darussalam'],
      ['Bulgaria', 'Bułgaria'],
      ['Burkina Faso', 'Burkina Faso'],
      ['Burma', 'Mjanma (Birma)'],
      ['Burundi', 'Burundi'],
      ['Cabo Verde', 'Wyspy Zielonego Przylądka'],
      ['Cambodia', 'Kambodża'],
      ['Cameroon', 'Kamerun'],
      [ 'Canada', 'Kanada'],
      ['Central African Republic', 'Republika Środkowoafrykańska'],
      ['Chad', 'Czad'],
      ['Chile', 'Chile'],
      ['China', 'Chiny'],
      ['Colombia', 'Kolumbia'],
      ['Comoros', 'Komory'],
      ['Congo (Brazzaville)', 'Kongo'],
      ['Congo (Kinshasa)', 'Demokratyczna Republika Konga'],
      ['Costa Rica', 'Kostaryka'],
      ['Cote d\'Ivoire', 'Wybrzeże Kości Słoniowej'],
      ['Croatia', 'Chorwacja'],
      ['Cuba', 'Kuba'],
      ['Cyprus', 'Cypr'],
      ['Czechia', 'Czechy'],
      ['Denmark', 'Dania'],
      ['Diamond Princess', 'Diamond Princess'],
      ['Djibouti', 'Dżibuti'],
      ['Dominican Republic', 'Dominikana'],
      ['Dominica', 'Dominika'],
      ['Ecuador', 'Ekwador'],
      ['Egypt', 'Egipt'],
      ['El Salvador', 'Salwador'],
      ['Equatorial Guinea', 'Gwinea Równikowa'],
      ['Eritrea', 'Erytrea'],
      ['Estonia', 'Estonia'],
      ['Eswatini', 'Suazi'],
      ['Ethiopia', 'Etiopia'],
      ['Fiji', 'Fidżi'],
      ['Finland', 'Finlandia'],
      ['France', 'Francja'],
      ['Gabon', 'Gabon'],
      ['Gambia', 'Gambia'],
      ['Georgia', 'Gruzja'],
      ['Germany', 'Niemcy'],
      ['Ghana', 'Ghana'],
      ['Greece', 'Grecja'],
      ['Grenada', 'Grenada'],
      ['Guatemala', 'Gwatemala'],
      ['Guinea', 'Gwinea'],
      ['Guinea-Bissau', 'Gwinea Bissau'],
      ['Guyana', 'Gujana'],
      ['Haiti', 'Haiti'],
      ['Holy See', 'Watykan'],
      ['Honduras', 'Honduras'],
      ['Hungary', 'Węgry'],
      ['Iceland', 'Islandia'],
      ['India', 'Indie'],
      ['Indonesia', 'Indonezja'],
      ['Iran', 'Iran'],
      ['Iraq', 'Irak'],
      ['Ireland', 'Irlandia'],
      ['Israel', 'Izrael'],
      ['Italy', 'Włochy'],
      ['Jamaica', 'Jamajka'],
      ['Japan', 'Japonia'],
      ['Jordan', 'Jordania'],
      ['Kazakhstan', 'Kazachstan'],
      ['Kenya', 'Kenia'],
      ['Korea, South', 'Korea Południowa'],
      ['Kosovo', 'Kosowo'],
      ['Kuwait', 'Kuwejt'],
      ['Kyrgyzstan', 'Kirgistan'],
      ['Laos', 'Laos'],
      ['Latvia', 'Łotwa'],
      ['Lebanon', 'Liban'],
      ['Lesotho', 'Lesotho'],
      ['Liberia', 'Liberia'],
      ['Libya', 'Libia'],
      ['Liechtenstein', 'Liechtenstein'],
      ['Lithuania', 'Litwa'],
      ['Luxembourg', 'Luksemburg'],
      ['MS Zaandam', 'MS Zaandam'],
      ['Madagascar', 'Madagaskar'],
      ['Malawi', 'Malawi'],
      ['Malaysia', 'Malezja'],
      ['Maldives', 'Malediwy'],
      ['Mali', 'Mali'],
      ['Malta', 'Malta'],
      ['Mauritania', 'Mauretania'],
      ['Mauritius', 'Mauritius'],
      ['Mexico', 'Meksyk'],
      ['Moldova', 'Mołdawia'],
      ['Monaco', 'Monako'],
      ['Mongolia', 'Mongolia'],
      ['Montenegro', 'Czarnogóra'],
      ['Morocco', 'Moroko'],
      ['Mozambique', 'Mozambik'],
      ['Namibia', 'Namibia'],
      ['Nepal', 'Nepal'],
      ['Netherlands', 'Holandia'],
      ['New Zealand', 'Nowa Zelandia'],
      ['Nicaragua', 'Nikaragua'],
      ['Nigeria', 'Nigeria'],
      ['Niger', 'Niger'],
      ['North Macedonia', 'Macedonia (BJRM)'],
      ['Norway', 'Norwegia'],
      ['Oman', 'Oman'],
      ['Pakistan', 'Pakistan'],
      ['Panama', 'Panama'],
      ['Papua New Guinea', 'Papua-Nowa Gwinea'],
      ['Paraguay', 'Paragwaj'],
      ['Peru', 'Peru'],
      ['Philippines', 'Filipiny'],
      ['Poland', 'Polska'],
      ['Portugal', 'Portugalia'],
      ['Qatar', 'Katar'],
      ['Romania', 'Rumunia'],
      ['Russia', 'Rosja'],
      ['Rwanda', 'Rwanda'],
      ['Saint Kitts and Nevis', 'Saint Kitts i Nevis'],
      ['Saint Lucia', 'Saint Lucia'],
      ['Saint Vincent and the Grenadines', 'Saint Vincent i Grenadyny'],
      ['San Marino', 'San Marino'],
      ['Sao Tome and Principe', 'Wyspy Świętego Tomasza i Książęca'],
      ['Saudi Arabia', 'Arabia Saudyjska'],
      ['Senegal', 'Senegal'],
      ['Serbia', 'Serbia'],
      ['Seychelles', 'Seszele'],
      ['Sierra Leone', 'Sierra Leone'],
      ['Singapore', 'Singapur'],
      ['Slovakia', 'Słowacja'],
      ['Slovenia', 'Słowenia'],
      ['Solomon Islands', 'Wyspy Salomona'],
      ['Somalia', 'Somalia'],
      ['South Africa', 'Republika Południowej Afryki'],
      ['South Sudan', 'Sudan Południowy'],
      ['Spain', 'Hiszpania'],
      ['Sri Lanka', 'Sri Lanka'],
      ['Sudan', 'Sudan'],
      ['Suriname', 'Surinam'],
      ['Sweden', 'Szwecja'],
      ['Switzerland', 'Szwajcaria'],
      ['Syria', 'Syria'],
      ['Taiwan*', 'Tajwan'],
      ['Tajikistan', 'Tadżykistan'],
      ['Tanzania', 'Tanzania'],
      ['Thailand', 'Tajlandia'],
      ['Timor-Leste', 'Timor Wschodni'],
      ['Togo', 'Togo'],
      ['Trinidad and Tobago', 'Trynidad i Tobago'],
      ['Tunisia', 'Tunezja'],
      ['Turkey', 'Turcja'],
      ['US', 'Stany Zjednoczone'],
      ['Uganda', 'Uganda'],
      ['Ukraine', 'Ukraina'],
      ['United Arab Emirates', 'Zjednoczone Emiraty Arabskie'],
      ['United Kingdom', 'Wielka Brytania'],
      ['Uruguay', 'Urugwaj'],
      ['Uzbekistan', 'Uzbekistan'],
      ['Venezuela', 'Wenezuela'],
      ['Vietnam', 'Wietnam'],
      ['West Bank and Gaza', 'Zachodni Brzeg'],
      ['Western Sahara', 'Sahara Zachodnia'],
      ['Yemen', 'Jemen'],
      ['Zambia', 'Zambia'],
      ['Zimbabwe', 'Zimbabwe']
    ]);
  }

  get countryNamesMapPlEn() {
    return this._countryNamesMapPlEn;
  }

  get countryNamesMapEnPl() {
    return this._countryNamesMapEnPl;
  }
}
