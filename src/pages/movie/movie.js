import React, {useState} from "react";
import {Row, Col, Button} from "antd";
import {useParams} from "react-router-dom";
import moment from "moment";
import {PlayCircleFilled} from "@ant-design/icons"

import useFecth from "../../hooks/useFecth";
import {API, URL_API} from "../../utils/constants";
import Loading from "../../components/Loading";
import ModalVideo from "../../components/ModalVideo";

import "./movie.scss";


export default function Movie(){
    const {id} = useParams();
    const movieInfo = useFecth(`${URL_API}/movie/${id}?api_key=${API}&language=es-ES`);
    const recommendedMovies = useFecth(`https://api.themoviedb.org/3/movie/upcoming?api_key=2af4101b9cccb25bbefb90afc3225cd6&language=es-ES&page=1`);
    console.log(recommendedMovies);
    
    if(movieInfo.loading || !movieInfo.result){
        return <Loading />
    }

    return (
            <RenderMovie movieInfo={movieInfo.result}/>
    );
}

function RenderMovie(props){
    const {movieInfo: {title, backdrop_path, poster_path}} = props;
    const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    
    return (
        <div className="movie" style={{backgroundImage: `url('${backdropPath}')`}}>
           <Row>
               <Col /* span={8} offset={3} */ className="movie__poster">
                   <PosterMovie image={poster_path}/>
               </Col>
               <Col span={10} className="movie__info">
                   <MovieInfo movieInfo={props.movieInfo} />
               </Col>
           </Row>           
        </div>
    );
}

function PosterMovie(props) {
    const {image} = props
    const posterPath =  `https://image.tmdb.org/t/p/original${image}`;

    return(
        <div style={{backgroundImage: `url('${posterPath}')`}}/>
    );

}

function MovieInfo(props){
    const {movieInfo: {id, title, release_date, overview, genres, vote_average, runtime}} = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const videoMovie = useFecth(`${URL_API}/movie/${id}/videos?api_key=${API}&language=es-ES`)
    
    const openModal = () => setIsVisibleModal(true);
    const closeModal = () => setIsVisibleModal(false);

    // MODAL PARA VER EL TRAILER

    const renderVideo = () => {
        if(videoMovie.result){
            if(videoMovie.result.results.length > 0) {
                return(
                    <>
                        <Button onClick={openModal}>
                            <PlayCircleFilled  />
                            Ver Trailer
                        </Button>
                        <ModalVideo 
                            videoKey={videoMovie.result.results[0].key}
                            videoPlatform={videoMovie.result.results[0].site}
                            isOpen={isVisibleModal}
                            close={closeModal}
                            />    
                    </>
                )
            }
        }
    }

    // INFORMACIÓN SOBRE LA PELÍCULA: SINOPSIS, GÉNEROS, FECHA DE ESTRENO...

    return (
        <div>
            <div className="movie__info-header">
                <h1>
                    {title}
                    <span>{moment(release_date).format('YYYY')}</span>
                </h1>
                {renderVideo()}
            </div>
            <div className="movie__info-content">
                <h3>Sinopsis</h3>
                <p>{overview}</p>

                <div className="movie__info-content-extended">
                    <div>
                        <h3>Géneros</h3>
                        <ul>
                            {genres.map(gender => (
                                <li key={gender.id}>{gender.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Fecha de estreno</h4>
                        <p>{moment(release_date).format('DD-MM-YYYY')}</p>
                        <h4>Nota Media: {vote_average}</h4>
                        <h4>Duración: {runtime} minutos</h4>
                    </div>
                </div>
            
            </div>
        </div>
    );
}