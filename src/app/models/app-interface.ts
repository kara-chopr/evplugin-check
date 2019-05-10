export interface AppInterface {
    name: string;
    code: string;
}
export interface Car {
    vin:string;
    year:number;
    brand:string;
    color:string;
   
}
export interface TestimonialInterface{
    name:string;
    clientimage:string;
    feedback:string;
}
export interface IevStation{
    adaptor:string;
    address:any;
    avg_rating:any;
    business_code:any;
    business_id;any;
    business_name:any;
    business_status_id:number;
    business_status_text:string;
    business_type_id:number;
    charging_price:any;
    city_id:number;
    city_name:string;
    close_time:any;
    cover_photo_url:any;
    created_at:any;
    created_by:any;
    email:any;
    featured_till?:any;
    last_updated_at?:any;
    last_updated_by:any;
    latitude:any;
    location_id:any;
    location_name:any;
    longitude:any;
    mobile:any;
    name:string;
    no_of_fav:number;
    no_of_reviews:number;
    no_of_views:number;
    open_24:number;
    open_time:number;
    pdesignation:any;
    pemail:any;
    plandline:any;
    pmobile:any;
    show_on_home:any;
    state_id:any;
    state_name:string;
    type_color:any;
    type_icon:any;
    type_marker:any;
    type_name:any;
}