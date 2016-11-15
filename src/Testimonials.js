
import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const TestimonialData = {
    crocker: {
        quote: "Oh man, I love JavaScript, but you show me this stuff and it just doesn't look like anything I'm used to.",
        who: 'Robert Crocker, d3 meetup organizer'
    },
    tamara: {
        quote: "I love what you're teaching us, but I just can't wrap my head around all this weird syntax we're using.",
        who: 'Tamara, React+d3 workshop attendee'
    }
};

const Testimonial = ({ which }) => {
    let { quote, who } = TestimonialData[which];

    return (
        <div itemProp="review" itemScope itemType="http://schema.org/Review">
            <blockquote className="col-xs-9 col-xs-offset-1 col-md-7"
                        style={{marginLeft: '25px'}}>
	        <p itemProp="reviewBody">{quote}</p>
	        <small itemProp="author" itemScope itemType="http://schema.org/Person"><span itemProp="name">{who}</span></small>
            </blockquote>
        </div>
    );
}

const CarouselTestimonial = (k) => (
    <CarouselItem key={k}>
        <Testimonial which={k} />
    </CarouselItem>
);

export const TestimonialsCarousel = ({ keynames, className }) => (
    <Carousel className="row testimonial-carousel">
        {keynames.map(CarouselTestimonial)}
    </Carousel>
);


export default Testimonial;
