import training from './training.png';
export default function Gallery() {
    return (
        <div id="gallery" className="pad1">
            <h2>Courses Offered</h2>
            <div className="images">
                <img width="60%" src={training} alt="course" />

                {/* <img width="30%" src="https://www.thespruceeats.com/thmb/E69KpId_2UzDmLKqj_cqBTsyykw=/3135x3135/smart/filters:no_upscale()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg" />
                <img width="30%" src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216744.jpg?output-format=auto&output-quality=auto" />
            */}
            </div>
        </div>
    )
}