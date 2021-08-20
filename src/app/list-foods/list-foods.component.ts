import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-list-foods',
  templateUrl: './list-foods.component.html',
  styleUrls: ['./list-foods.component.css']
})
export class ListFoodsComponent implements OnInit {
  title:string="Select City:";
  Keywords: string[] = [];
  InputKeyword: string = "";
  DeleteKeyword: string = "";
  IsInitializationDone: boolean = false;
  ChangeFromKeyword: string = "";
  ChangeToKeyword: string = "";


  LstCities:string[]=[];
  selectedCity:string="--Select--";   
  dataLucknow: Array<any>=[];
  dataNoida: Array<any>=[];
  dataDelhi: Array<any>=[];
  dataKolkata: Array<any>=[];
  dataChandigarh: Array<any>=[];
  constructor() {

   }

  ngOnInit() 
  {
    this.LstCities.push("Delhi");
    this.LstCities.push("Noida");
    this.LstCities.push("Lucknow");
    this.LstCities.push("Kolkata");
    this.LstCities.push("Chandigarh");

    this.LoadLucknowRestaurant();
    this.LoadDelhiRestaurant();
    this.LoadNoidaRestaurant();
    this.LoadKolkataRestaurant();
    this.LoadChandigarhRestaurant();

  }

  LoadLucknowRestaurant(){
      this.dataLucknow = [{SerialNumber : '1', RestaurantName : 'Oudhyana – A Royal Dining Experience', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : 'Vivanta by Taj – Gomti Nagar, Lucknow'},
      {SerialNumber : '2', RestaurantName : 'Falaknuma Rooftop Restaurant – A Marvelous Place', SpecialFor: 'North Indian and Lucknowi cuisines',
      Timings: '1:00 PM to 3:00 PM, and 8:00 PM to 11:30 PM', Address : 'Hotel Clarks Avadh, 8, M.G. Marg, Hazratganj, Lucknow'},
      {SerialNumber : '3', RestaurantName : 'The Urban Terrace – For An Elegant Ambiance', SpecialFor: 'Continental, Mughlai, and Italian delicacies',
      Timings: '11:00 AM to 11:00 PM', Address : 'CP-73, Viraj Khand, Gomti Nagar, Opposite Sahara Hospital Gate No. 1, Lucknow'},
      {SerialNumber : '4', RestaurantName : 'Royal Sky – Scrumptious Mughlai Cuisine', SpecialFor: 'Continental, Indian, Chinese, and Mughlai food',
      Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : '1st Floor, Opposite Halwasiya Market, Hazratganj, Lucknow'},
      {SerialNumber : '5', RestaurantName : 'The Mughal’s Dastarkhwan – Get Authentic Awadhi Food', SpecialFor: 'North Indian, Mughlai, Chinese, and Lucknowi cuisines',
      Timings: '12:30 PM to 10:30 PM', Address : '29, BN Road, Near Royal Hotel Crossing, Lalbagh, Lucknow'},
      {SerialNumber : '6', RestaurantName : 'Kava Restaurant – For A Splendid Experience', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '11:00 AM to 11:00 PM', Address : 'Gate 2, Opposite Indra Gandhi Prathishthan, Vibhuti Khand, Gomti Nagar, Lucknow'},
      {SerialNumber : '7', RestaurantName : 'Moti Mahal Restaurant – For Continental Cuisines', SpecialFor: 'North and South Indian, Continental, and Chinese food',
      Timings: '11:00 AM to 11:00 PM', Address : 'No.75, Mahatma Gandhi Marg, Next to Central Bank of India, Hazratganj, Lucknow'},
      {SerialNumber : '8', RestaurantName : 'Sakhawat Restaurant – A Budget Destination', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '5:00 PM to 11:00 PM except Tuesdays', Address : 'Qaiser Bagh Avenue, Near Oudh Gymkhana Club, Lucknow'},
      {SerialNumber : '9', RestaurantName : 'Green Restaurant – Taste The Local Food', SpecialFor: 'Mughlai and Lucknowi cuisines',
      Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : 'Vivek Khand, Near Neelkanth Sweets, Gomti Nagar, Lucknow'},
      {SerialNumber : '10', RestaurantName : 'Altitude – Get Impeccable City Views', SpecialFor: ' European, North Indian, and Continental delicacies',
      Timings: '12:00 PM to 11:00 PM', Address : ' Radisson Lucknow City Center, 24 Cantonment Road, Aminabad, Lucknow'}]
        
  }
  LoadDelhiRestaurant(){


    this.dataDelhi = [{SerialNumber : '1', RestaurantName : 'Le Cirque, The Leela Palace', Timings: '7 PM - 12 AM',
    CostForTwo: 'Rs.5,000', Address : ' Le Cirque - Diplomatic Enclave, Chanakyapuri'},
    {SerialNumber : '2', RestaurantName : 'Orient Express, Taj Palace Hotel', Timings: '6:30 - 11:30 PM',
    CostForTwo: 'Rs.8,000', Address : 'Orient Express - Taj Palace, 2, Sardar Patel Marg, Diplomatic Enclave'},
    {SerialNumber : '3', RestaurantName : 'Ottimo At West View, ITC Maurya', Timings: '7 - 11:45 PM',
    CostForTwo: 'Rs.6,600', Address : 'Ottimo At West View - ITC Maurya Diplomatic Enclave, Sardar Patel Marg'},
    {SerialNumber : '4', RestaurantName : 'MEGU, The Leela Palace', Timings: '12:30 - 2:30 PM & 7 PM - 12 Midnight',
    CostForTwo: 'Rs.5,500', Address : 'MEGU - The Leela Palace, Diplomatic Enclave, Chanakyapuri'},
    {SerialNumber : '5', RestaurantName : 'Bukhara, ITC Maurya', Timings: '12:30 - 2:45 PM & 7 - 11:45 PM',
    CostForTwo: 'Rs.6,500', Address : 'Bukhara - ITC Maurya, Sardar Patel Marg, Akhaura Block, Diplomatic Enclave, Chanakyapuri'},
    {SerialNumber : '6', RestaurantName : 'Indian Accent ', Timings: '12 Noon - 2:30 PM & 7 - 10:30 PM',
    CostForTwo: 'Rs.5,000', Address : ' Indian Accent - The Lodhi, Lodhi Road'},
    {SerialNumber : '7', RestaurantName : 'Kheer, Roseate House', Timings: '7 - 11:30 PM',
    CostForTwo: 'Rs.4,500', Address : 'Kheer - Roseate House, Asset 10, Hospitality District, Aerocity'},
    {SerialNumber : '8', RestaurantName : 'Sevilla - The Claridges ', Timings: '7 - 11:45 PM ',
    CostForTwo: 'Rs.4,500', Address : 'Sevilla - The Claridges,12, Dr A.P.J. Abdul Kalam Road, Aurangzeb Road'},
    {SerialNumber : '9', RestaurantName : 'Tian - Asian Cuisine Studio, ITC Maurya ', Timings: '7 - 11:30 PM',
    CostForTwo: 'Rs.5,000', Address : 'Tian - Asian Cuisine Studio - ITC Maurya, Chanakyapuri'},
    {SerialNumber : '10', RestaurantName : 'Varq - The Taj Mahal Hotel', Timings: '7 - 11:45 PM ',
    CostForTwo: 'Rs.4,500', Address : 'Varq - The Taj Mahal Hotel, Mansingh Road'}]
    
  
  }
  LoadNoidaRestaurant(){
      
    this.dataNoida = [{SerialNumber : '1', RestaurantName : 'Mosaic – Crowne Plaza Greater Noida', SpecialFor: 'Chinese, Continental, North Indian',
    CostForTwo: 'Rs.3400', Address : 'Greater Noida, Noida'},
    {SerialNumber : '2', RestaurantName : 'Made in India Radisson Blu', SpecialFor: 'North Indian, Lucknowi',
    CostForTwo: 'Rs.4000', Address : 'Sector 18, Noida'},
    {SerialNumber : '3', RestaurantName : 'SodaBottleOpenerWala', SpecialFor: 'Parsi, Iranian',
    CostForTwo: 'Rs.1450', Address : 'Sector 18, Noida'},
    {SerialNumber : '4', RestaurantName : 'Flluid', SpecialFor: 'Continental, North Indian, Mexican',
    CostForTwo: 'Rs.2250', Address : 'Mosaic Hotels, C 1, Sector 18, Noida'},
    {SerialNumber : '5', RestaurantName : 'Bohemia', SpecialFor: 'Mediterranean, Italian',
    CostForTwo: 'Rs.850', Address : '250, First Floor, Garden Galleria, Sector 38, Noida'},
    {SerialNumber : '6', RestaurantName : 'Southern Treat ', SpecialFor: 'South Indian',
    CostForTwo: 'Rs.350', Address : 'Sector 50, Noida'},
    {SerialNumber : '7', RestaurantName : 'Barrack 62', SpecialFor: 'North Indian, Continental, Italian, Fast Food',
    CostForTwo: 'Rs.900', Address : 'Sector 62, Noida'},
    {SerialNumber : '8', RestaurantName : 'Imperfecto', SpecialFor: 'Finger Food, Italian, North Indian',
    CostForTwo: 'Rs.1850', Address : '341, Gardens Galleria, Sector 38, Noida'},
    {SerialNumber : '9', RestaurantName : 'Theos', SpecialFor: 'Mughlai and Lucknowi cuisines',
    CostForTwo: 'Rs.900', Address : '3rd Floor, DLF Mall Of India, Sector 18, Noida'},
    {SerialNumber : '10', RestaurantName : 'Cafe Delhi Heights', SpecialFor: 'Cafe, Desserts',
    CostForTwo: 'Rs.1950', Address : '3rd Floor, DLF Mall of India, Sector 18, Noida'}]

  }
  LoadKolkataRestaurant(){


    this.dataKolkata = [{SerialNumber : '1', RestaurantName : 'Paris Cafe', SpecialFor: 'Cafe, Bakery, Desserts, Italian, Continental',
    Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : 'Block EP XI-I, South City Pinnacle, Sector 5, Salt Lake, Kolkata'},
    {SerialNumber : '2', RestaurantName : 'Mrs. Magpie', SpecialFor: 'Cafe, Bakery, Desserts',
    Timings: '1:00 PM to 3:00 PM, and 8:00 PM to 11:30 PM', Address : '570, Lake Terrace Road Extension, Keyatala, Southern Avenue, Kolkata'},
    {SerialNumber : '3', RestaurantName : ' Smoke Shack', SpecialFor: 'North Indian, Continental',
    Timings: '11:00 AM to 11:00 PM', Address : '7th floor, Hotel Park Plaza, 17, Garcha 1st Lane, Ballygunge, Kolkata, West Bengal 700019'},
    {SerialNumber : '4', RestaurantName : ' Gabbar’s Bar and Kitchen', SpecialFor: 'North Indian, Chinese, Mexican, Italian',
    Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : '11/1, Ho Chi Minh Sarani, Camac Street Area, Kolkata'},
    {SerialNumber : '5', RestaurantName : 'Aaira', SpecialFor: 'North Indian, Mughlai',
    Timings: '12:30 PM to 10:30 PM', Address : '1st Floor, The Myx, 20G, Near Loreto House, Park Street Area, Kolkata'},
    {SerialNumber : '6', RestaurantName : 'Guchhi', SpecialFor: 'North Indian, Mughlai',
    Timings: '11:00 AM to 11:00 PM', Address : 'Hyatt Regency, JA-1, Sector 3, Salt Lake, Kolkata 700098'},
    {SerialNumber : '7', RestaurantName : 'Dum Pukht', SpecialFor: 'Awadhi',
    Timings: '11:00 AM to 11:00 PM', Address : 'ITC Sonar Bangla Sheraton & Tower, Em Bypass, 1, Haldane Avenue, Kolkata 700046'},
    {SerialNumber : '8', RestaurantName : 'Waterside Cafe', SpecialFor: 'North Indian, Continental, Salad',
    Timings: '5:00 PM to 11:00 PM except Tuesdays', Address : 'Hyatt Regency, JA-1, Sector III, Salt Lake City, Kolkata 700098'},
    {SerialNumber : '9', RestaurantName : 'La Cucina', SpecialFor: 'Mughlai and Lucknowi cuisines',
    Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : 'Hyatt Regency, JA-1, Next to Stadium, Sector III, Salt Lake City, Kolkata 700098'},
    {SerialNumber : '10', RestaurantName : 'Tamara', SpecialFor: 'North Indian, Chinese, Mexican, Thai, Continental',
    Timings: '12:00 PM to 11:00 PM', Address : 'RGM-AS/465, Hatiara, Major Arterial Road, Kolkata'}]

  }
  LoadChandigarhRestaurant(){

    this.dataChandigarh = [{SerialNumber : '1', RestaurantName : 'Garlic And Greens', SpecialFor: 'Italian, and Continental',
    Timings: '11 am to 11:30 pm', Address : 'Elante Mall, BBMB Industrial Area Phase 1, Purv Marg, Chandigarh'},
    {SerialNumber : '2', RestaurantName : 'Virgin Courtyard', SpecialFor: 'Italian',
    Timings: '11:30 am to 11:30 pm', Address : 'SCO 1A, Madhya Marg, Sector 7C, Chandigarh'},
    {SerialNumber : '3', RestaurantName : 'Chilli & Pepper', SpecialFor: 'North Indian, Continental, Chinese',
    Timings: '11:00 AM to 11:00 PM', Address : 'Arista Hotel, SCO 1040A-1044, New Sunny Enclave, Sector 125, Sahibzada Ajit Singh Nagar'},
    {SerialNumber : '4', RestaurantName : 'Cafe JC’s', SpecialFor: 'Chinese, Continental, American, and North Indian',
    Timings: '12:30 PM to 3:00 PM and 7:30 PM to 11:30 PM', Address : 'Shop No. 2 & 3, Coal Depot, Sector-10D, Chandigarh'},
    {SerialNumber : '5', RestaurantName : 'Cafe Jade', SpecialFor: 'Chinese, and Thai',
    Timings: '11 am to 11 pm', Address : 'Booth Number 254, Sector 38-D, Sector 38, Chandigarh'},
    {SerialNumber : '6', RestaurantName : 'Swagath Restaurant', SpecialFor: 'Mangalorean, Chettinad, North Indian, Chinese, and Mughlai',
    Timings: '11:00 AM to 11:00 PM', Address : 'SCO, Madhya Marg, Sector 26, Chandigarh'},
    {SerialNumber : '7', RestaurantName : ' Ghazal Restaurant', SpecialFor: 'Awadhi',
    Timings: '11:00 AM to 11:00 PM', Address : 'SCO 189-191, Sector 17 C, Sector 17, Chandigarh'},
    {SerialNumber : '8', RestaurantName : 'Shangrila', SpecialFor: 'Chinese, and Seafood',
    Timings: '12 noon to 11 pm', Address : 'SCO-324, Near Maya Hotel, Sector 35B, Chandigarh '},
    {SerialNumber : '9', RestaurantName : 'Sankalp Vegetarian Restaurant', SpecialFor: 'South Indian',
    Timings: '11 am to 11 pm', Address : 'SCO – 11, Madhya Marg, Sector 26, Near Police Station, Chandigarh'},
    {SerialNumber : '10', RestaurantName : 'Sagar Ratna', SpecialFor: 'South Indian, North Indian, and Chinese',
    Timings: '12:00 PM to 11:00 PM', Address : 'SCO – 488, Sector 35-C, Chandigarh'}]
  }
  

  


}

