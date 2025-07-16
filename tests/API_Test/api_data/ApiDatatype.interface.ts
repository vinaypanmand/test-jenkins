interface ApiDatatype {

    "firstname": string,
    "lastname": string,
    "totalprice": number,
    "depositpaid": boolean,
    "bookingdates": BookingDates,
    "additionalneeds": string

}


interface BookingDates {

    "checkin": string,
    "checkout": string

}