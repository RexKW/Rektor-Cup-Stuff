// import clouds from '../assets/Clouds.png'
// import track from '../assets/TrainTrack.svg'
import cityFront from '../assets/BGFrontCityRules.svg'
import cityBack from '../assets/BGBackCityRules.svg'
import floor from '../assets/RulesFloor.png'
// import mascot from '../assets/MascotWing.png'
// import DayCard from '../components/dayCard'
import { useRef, useState } from 'react';
import gsap from "gsap"
import { useEffect } from 'react'
import HologramSpin from '../assets/Hologram spin full.svg';
import RuleBG from '../assets/RuleContent.png'

import BarBG from "../assets/BarBG.svg"
import RuleBottomFloor from '../assets/RuleFloorBottom.svg'
// import Shapes from "../assets/SquareTriangle.svg"

function Rules() {
  const trainRef = useRef(null);
    const cloudRef = useRef(null);
    const mascotRef = useRef(null);
    const [pasal, setPasal] = useState(1);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: {} });
        const cl = gsap.timeline({ repeat: -1, defaults: { ease: "power4.out", duration: 1 } });
        const ml = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } })

        tl.to(trainRef.current, { x: -1500, opacity: 1 }) // Train moves in
            .to(trainRef.current, { x: 2500, opacity: 1, duration: 5 }) // Train moves out
            .to(trainRef.current, { x: -1500, opacity: 1, duration: 5 }) // Reset position before entering again
            .to(trainRef.current, { x: 2500, opacity: 1, duration: 5 })
        cl.to(cloudRef.current, { y: 0, duration: 1, ease: "linear" })
            .to(cloudRef.current, { y: -5, duration: 2, ease: "linear" })
            .to(cloudRef.current, { y: 0, duration: 1, ease: "linear" })

        ml.from(mascotRef.current, { y: 250, duration: 0.5, scale: 0.8, ease: "linear" })
            .to(mascotRef.current, { y: 0, duration: 0.5, scale: 1, ease: "linear" })
        return () => {
            tl.kill();
            cl.kill();
            ml.kill();
        }
    }, []);

    const nextPasal = () =>{
        if(pasal != 2){
            setPasal(pasal+1)
        }
        
    }

    const prevPasal = () =>{
        if(pasal != 1){
            setPasal(pasal-1)
        }
    }

    const nextPage = () =>{
        switch(pasal){
            case 1:
                if(page!=9){
                    setPage(page+1)
                }
                break;
            case 2:
                if(page!=9){
                    setPage(page+1)
                }
                break;

        }
        
    }

    const prevPage = () =>{
        
        if(page!=1){
            setPage(page-1)
        }
    }

    useEffect(()=>{
        setPage(1)
    },[pasal])




    return (
        <div className='relative'>
            
            <div className="h-[40vh] overflow-hidden z-1 lg:h-screen w-screen relative bg-gradient-to-b justify-center items-center from-[#2C186C]  to-[#961854]">
                <p className='batman text-4xl lg:text-8xl absolute top-20 text-white w-full'>Rules</p>
                
                <img src={cityFront} alt="" className='absolute bottom-[-5%] z-10 w-screen' />
                <img src={cityBack} alt="" className='absolute bottom-[-3%] z-[2] w-screen' />
                <img src={HologramSpin} className='absolute w-[30vw] h-[30vw] top-20 left-[-10%] z-[1] opacity-50' alt="" />
                <img src={HologramSpin} className='absolute w-[30vw] h-[30vw] top-20 right-[-10%] z-[1] opacity-50' alt="" />
                <img src={BarBG} alt="" className='absolute w-screen bottom-[-25%] z-[0] mix-blend-color-dodge'/>
            </div>
            <img src={floor} alt="" className='absolute top-[30vh] lg:top-[50vh] w-screen z-20'/>
            <div className='h-full w-screen relative bg-[#000919]  flex justify-center pb-10  relative'>
            
                <div className='flex flex-col gap-20 z-[50] justify-center relative items-center px-20'>
                    <div className='gap-5 flex flex-row relative '>   
                        <button onClick={prevPasal} className='py-1 px-3 relative  rounded-xl body bg-[#11283D] text-white  border-2 border-sky-500'>&larr;</button>
                    <select name="pasal" value={pasal} id="" onChange={(e) => setPasal(+e.target.value)} className='w-[60vw] py-2 rounded-xl bg-[#11283D] text-white body text-center'>
                        <option value="1">RektorCup 2025</option>
                        <option value="2">UC Champions 2025</option>
                    </select>
                        <button onClick={nextPasal} className='py-1 px-3  rounded-xl body  bg-[#11283D] text-white border-2 border-sky-500'>&rarr;</button>
                    </div>
                    
                    <div className='relative w-[90vw] flex flex-col justify-center items-center'>
    
                      <p className='text-white body rounded-xl w-full  py-[15%] lg:py-[10%]  top-0 z-[20] ' style={{
                            backgroundImage: `url(${RuleBG})`,
                            backgroundSize: "100% 100%", 
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}>
                        {pasal == 1 && page==1 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>1. Dilarang membawa senjata tajam, contoh: pisau, pedang, belati, golok, celurit, dan lain-lainnya.</li>
                                <li>2. Dilarang membawa senjata api, contoh: pistol, senapan, shotgun, dan lain-lainnya.</li>
                                <li>3. Dilarang membawa senjata / mainan yang berbahaya, contoh: airsoft, paintball, tongkat besi, pentung, dan lainnya.</li>
                                <li>4. Dilarang membawa obat-obatan terlarang, contoh:sabu-sabu, methamphetamine, ganja, dan lain-lainnya.</li>
                                <li>5. Dilarang merokok / vape / pod di seluruh areaUniversitas Ciputra Surabaya, terutama padatempat pelaksanaan lomba atau lapanganperlombaan.</li>
                            </ol>
                        </>}
                        {pasal == 1 && page==2 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>6. Dilarang berkata tidak sopan ataupun melakukan tindakan yang menunjukkan perilaku yang kotor dan tercela, contoh : mengumpat, kata-kata yang vulgar, dan lain-lainnya yang mengganggu perlombaan.</li>
                                <li>7. Dilarang membawa dan menggunakan minuman beralkohol di sekitar area lomba.</li>
                                <li>8. Dilarang melakukan tindakan kekerasan seksual disekitar area kampus, baik secara verbal, non fisik, fisik, atau melalui teknologi informasi dan komunikasi.</li>
                                <li>9. Dilarang melakukan tindakan atau komentar yang akan menimbulkan permasalahan terkait SARA.</li>
                                <li>10. Dilarang melakukan tindakan provokatif / kekerasan yang akan berkemungkinan menimbulkan konflik dan memicu perkelahian, contoh : meninju peserta / penonton lain, merendahkan peserta / penonton lain, menghina peserta lomba oposisi, dan lain-lainnya.</li>
                            </ol>
                        </>}
                        {pasal == 1 && page==3 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>11. Dilarang melakukan tindakan yang akan merugikan peserta / penonton / tim oposisi, contoh: menyinari mata dengan laser, membuang barang ke dalam lapangan, memasuki lapangan tanpa adakepentingan (peserta, wasit, dll), dan lain-lainnya.</li>
                                <li>12. Dilarang mengotori / merusak lingkungan / tempat pelaksanaan lomba.</li>
                                <li>13. Peserta dan penonton wajib menggunakan pakaian yang sopan sesuai dengan peraturan kampus, seperti tidak menggunakan baju sleeveless, crop, crocs, celana pendek, dan lain-lain.</li>
                                <li>14. Peserta / penonton dilarang mengotori maupun merusak fasilitas yang ada. Bila terjadi kerusakan pada fasilitas akibat kelalaian peserta, maka beban penggantian ditanggungkan pada pihak peserta /p enonton yang bersangkutan.</li>
                                
                            </ol>
                        </>}
                        {pasal == 1 && page==4 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>15. Penonton dilarang melempar benda atau mengganggu jalannya pertandingan dengan cara apapun.</li>
                                <li>16. Peserta dan / atau penonton dilarang membantu peserta yang sedang berlomba atau melakukan tindakan kecurangan dalam bentuk apapun.</li>
                                <li>17. Penonton diharapkan mendukung dengan sopan, menjaga suasana kompetisi yang sportif, tidak melakukan chant atau melakukan maupun membawa alat-alat sorakan yang menghina tim lawan.</li>
                                
                            </ol>
                        </>}
                        {pasal == 1 && page==5 && <>
                            <p className='text-xl lg:text-4xl px-10' >Tindakan dan Hak</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>1. Apabila peraturan dilanggar oleh peserta atau penonton, maka panitia akan menegur sebanyakdua kali sesuai dengan tingkat pelanggaran yangtelah dilanggar.</li>
                                <li>2. Apabila peraturan dilanggar oleh peserta ataupenonton, maka panitia akan mengeluarkan danmemberi tindakan / hukuman sesuai denganperaturan yang telah dilanggar.</li>
                                <li>3. Segala bentuk tindak kecurangan yang dilakukanpeserta akan langsung didiskualifikasi.</li>
                                
                            </ol>
                        </>}
                        {pasal == 1 && page==6 && <>
                            <p className='text-xl lg:text-4xl px-10' >Tindakan dan Hak</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>4. Apabila peserta atau penonton membawa barang-barang yang dilarang, maka barang tersebut akan disita oleh panitia dan tidak akan dikembalikan.</li>
                                <li>5. Apabila peserta atau penonton melakukan tindakan anarkis / perkelahian atau tindakan yang melanggar peraturan, maka akan diberikan tindakan / hukuman sesuai dengan peraturan kampus dan pihak berwenang.</li>
                                <li>6. Panitia berhak untuk memberhentikan pertandingan jika terjadi konflik / situasi terlalu memanas dikarenakan peserta / penonton lomba yang tidak kondusif.</li>
                                
                            </ol>
                        </>}
                        {pasal == 1 && page==7 && <>
                            <p className='text-xl lg:text-4xl px-10' >Tindakan dan Hak</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>7. Para penonton diperbolehkan untuk membawa properti ataupun perlengkapan suporter seperti drum selama tidak mengganggu jalannya pertandingan.</li>
                                <li>8. Diperbolehkan membuat yel-yel selama tidak mengandung unsur provokasi antar tim dan / atau SARA.</li>

                            </ol>
                        </>}
                        {pasal == 1 && page==8 && <>
                            <p className='text-xl lg:text-4xl px-10' >Sanksi</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>1. Setiap pelanggaran terhadap peraturan Rektor Cup 2025 akan dikenai sanksi yang terdiri dari:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Sanksi Ringan;</li>
                                        <li>Sanksi Sedang;</li>
                                        <li>Sanksi Berat.</li>
                                    </ol>
                                </li>
                                <li>2. Sanksi ringan sebagaimana yang dimaksud pada ayat(1) huruf a meliputi:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Teguran Lisan;</li>
                                        <li>Pengurangan Kredit Point (KP) bagi mahasiswa/i UC;</li>
                                        <li>Pernyataan permohonan maaf, pernyataan penyesalan, atau pernyataan sikap; dan dalam bentuk tertulis.</li>
                                    </ol>
                                </li>
                                <li>3. Sanksi sedang sebagaimana yang dimaksud pada ayat(1) huruf b meliputi:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Sanksi Ringan;</li>
                                        <li>Denda;</li>
                                        <li>Mengganti semua kerusakan dan kerugian.</li>
                                    </ol>
                                </li>

                            </ol>
                        </>}
                        {pasal == 1 && page==9 && <>
                            <p className='text-xl lg:text-4xl px-10' >Sanksi</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>4. Sanksi berat sebagaimana yang dimaksud pada ayat(1) huruf c meliputi:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Sanksi Sedang;</li>
                                        <li>Dikeluarkan dari arena pertandingan;</li>
                                        <li>Di blacklist pada kegiatan Rektor Cup.</li>
                                    </ol>
                                </li>
                                <li>5. Setiap peserta, penonton, dan panitia yang terbuktimelakukan pelanggaran:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Pasal 1 ayat 5, 6, 9, 13, dan 17 akan dikenakan sanksi ringan sampai dengan sedang;</li>
                                        <li>Pasal 1 ayat 7, 12, dan 14 akan dikenakan sanksi sedang sampai dengan berat;</li>
                                        <li>Pasal 1 ayat 1, 2, 3, 4, 8, 10, 11, 15, 16 akan dikenakan sanksi berat.</li>
                                    </ol>
                                </li>
                            </ol>
                        </>}

                        {pasal == 2 && page==1 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>1. Dilarang membawa senjata tajam, contoh: pisau, pedang, belati, golok, celurit, dan lain-lainnya.</li>
                                <li>2. Dilarang membawa senjata api, contoh: pistol, senapan, shotgun, dan lain-lainnya.</li>
                                <li>3. Dilarang membawa senjata / mainan yang berbahaya, contoh: airsoft, paintball, tongkat besi, pentung, dan lainnya.</li>
                                <li>4. Dilarang membawa obat-obatan terlarang, contoh:sabu-sabu, methamphetamine, ganja, dan lain-lainnya.</li>
                                <li>5. Dilarang merokok / vape / pod di seluruh areaUniversitas Ciputra Surabaya, terutama padatempat pelaksanaan lomba atau lapanganperlombaan.</li>
                            </ol>
                        </>}
                        {pasal == 2 && page==2 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>6. Dilarang berkata tidak sopan ataupun melakukan tindakan yang menunjukkan perilaku yang kotor dan tercela, contoh : mengumpat, kata-kata yang vulgar, dan lain-lainnya yang mengganggu perlombaan.</li>
                                <li>7. Dilarang membawa dan menggunakan minuman beralkohol di sekitar area lomba.</li>
                                <li>8. Dilarang melakukan tindakan kekerasan seksual disekitar area kampus, baik secara verbal, non fisik, fisik, atau melalui teknologi informasi dan komunikasi.</li>
                                <li>9. Dilarang melakukan tindakan atau komentar yang akan menimbulkan permasalahan terkait SARA.</li>
                                <li>10. Dilarang melakukan tindakan provokatif / kekerasan yang akan berkemungkinan menimbulkan konflik dan memicu perkelahian, contoh : meninju peserta / penonton lain, merendahkan peserta / penonton lain, menghina peserta lomba oposisi, dan lain-lainnya.</li>
                            </ol>
                        </>}
                        {pasal == 2 && page==3 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>11. Dilarang melakukan tindakan yang akan merugikan peserta / penonton / tim oposisi, contoh: menyinari mata dengan laser, membuang barang ke dalam lapangan, memasuki lapangan tanpa adakepentingan (peserta, wasit, dll), dan lain-lainnya.</li>
                                <li>12. Dilarang mengotori / merusak lingkungan / tempat pelaksanaan lomba.</li>
                                <li>13. Peserta dan penonton wajib menggunakan pakaian yang sopan sesuai dengan peraturan kampus, seperti tidak menggunakan baju sleeveless, crop, crocs, celana pendek, dan lain-lain.</li>
                                <li>14. Peserta / penonton dilarang mengotori maupun merusak fasilitas yang ada. Bila terjadi kerusakan pada fasilitas akibat kelalaian peserta, maka beban penggantian ditanggungkan pada pihak peserta /p enonton yang bersangkutan.</li>
                                
                            </ol>
                        </>}
                        {pasal == 2 && page==4 && <>
                            <p className='text-xl lg:text-4xl px-10' >Peraturan dan Ketentuan </p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>15. Penonton dilarang melempar benda atau mengganggu jalannya pertandingan dengan cara apapun.</li>
                                <li>16. Peserta dan / atau penonton dilarang membantu peserta yang sedang berlomba atau melakukan tindakan kecurangan dalam bentuk apapun.</li>
                                <li>17. Penonton diharapkan mendukung dengan sopan, menjaga suasana kompetisi yang sportif, tidak melakukan chant atau melakukan maupun membawa alat-alat sorakan yang menghina tim lawan.</li>
                                
                            </ol>
                        </>}
                        {pasal == 2 && page==5 && <>
                            <p className='text-xl lg:text-4xl px-10' >Tindakan dan Hak</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>1. Apabila peraturan dilanggar oleh peserta atau penonton, maka panitia akan menegur sebanyakdua kali sesuai dengan tingkat pelanggaran yangtelah dilanggar.</li>
                                <li>2. Apabila peraturan dilanggar oleh peserta ataupenonton, maka panitia akan mengeluarkan danmemberi tindakan / hukuman sesuai denganperaturan yang telah dilanggar.</li>
                                <li>3. Segala bentuk tindak kecurangan yang dilakukanpeserta akan langsung didiskualifikasi.</li>
                                
                            </ol>
                        </>}
                        {pasal == 2 && page==6 && <>
                            <p className='text-xl lg:text-4xl px-10' >Tindakan dan Hak</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>4. Apabila peserta atau penonton membawa barang-barang yang dilarang, maka barang tersebut akan disita oleh panitia dan tidak akan dikembalikan.</li>
                                <li>5. Apabila peserta atau penonton melakukan tindakan anarkis / perkelahian atau tindakan yang melanggar peraturan, maka akan diberikan tindakan / hukuman sesuai dengan peraturan kampus dan pihak berwenang.</li>
                                <li>6. Panitia berhak untuk memberhentikan pertandingan jika terjadi konflik / situasi terlalu memanas dikarenakan peserta / penonton lomba yang tidak kondusif.</li>
                                
                            </ol>
                        </>}
                        {pasal == 2 && page==7 && <>
                            <p className='text-xl lg:text-4xl px-10' >Tindakan dan Hak</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>7. Para penonton diperbolehkan untuk membawa properti ataupun perlengkapan suporter seperti drum selama tidak mengganggu jalannya pertandingan.</li>
                                <li>8. Diperbolehkan membuat yel-yel selama tidak mengandung unsur provokasi antar tim dan / atau SARA.</li>

                            </ol>
                        </>}
                        {pasal == 2 && page==8 && <>
                            <p className='text-xl lg:text-4xl px-10' >Sanksi</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>1. Setiap pelanggaran terhadap peraturan UC Champions 2025 akan dikenai sanksi yang terdiri dari:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Sanksi Ringan;</li>
                                        <li>Sanksi Sedang;</li>
                                        <li>Sanksi Berat.</li>
                                    </ol>
                                </li>
                                <li>2. Sanksi ringan sebagaimana yang dimaksud pada ayat(1) huruf a meliputi:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Teguran Lisan;</li>
                                        <li>Pengurangan Kredit Point (KP) bagi mahasiswa/i UC;</li>
                                        <li>Pernyataan permohonan maaf, pernyataan penyesalan, atau pernyataan sikap; dan dalam bentuk tertulis.</li>
                                    </ol>
                                </li>
                                <li>3. Sanksi sedang sebagaimana yang dimaksud pada ayat(1) huruf b meliputi:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Sanksi Ringan;</li>
                                        <li>Denda;</li>
                                        <li>Mengganti semua kerusakan dan kerugian.</li>
                                    </ol>
                                </li>

                            </ol>
                        </>}
                        {pasal == 2 && page==9 && <>
                            <p className='text-xl lg:text-4xl px-10' >Sanksi</p>
                            <ol className='text-start space-y-4 text-base lg:text-xl pt-5 pl-10 pr-10 lg:pl-32 lg:pr-32'>
                                <li>4. Sanksi berat sebagaimana yang dimaksud pada ayat(1) huruf c meliputi:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Sanksi Sedang;</li>
                                        <li>Dikeluarkan dari arena pertandingan;</li>
                                        <li>Di blacklist pada kegiatan Rektor Cup.</li>
                                    </ol>
                                </li>
                                <li>5. Setiap peserta, penonton, dan panitia yang terbuktimelakukan pelanggaran:
                                    <ol className='ml-10 list-[lower-alpha]'>
                                        <li>Pasal 1 ayat 5, 6, 9, 13, dan 17 akan dikenakan sanksi ringan sampai dengan sedang;</li>
                                        <li>Pasal 1 ayat 7, 12, dan 14 akan dikenakan sanksi sedang sampai dengan berat;</li>
                                        <li>Pasal 1 ayat 1, 2, 3, 4, 8, 10, 11, 15, 16 akan dikenakan sanksi berat.</li>
                                    </ol>
                                </li>
                            </ol>
                        </>}
                      </p>
                    </div>
                    <div className='flex gap-5'>
                    <button onClick={prevPage} className='py-1 px-3 rounded-xl body bg-[#11283D] text-white  border-2 border-sky-500'>&larr;</button>
                    <select name="" value={page} id="" onChange={(e) => setPage(+e.target.value)}  className='w-[60vw]  py-2 rounded-xl bg-[#11283D] text-white body text-center'>
                        {pasal == 1 && 
                        <>
                        <option value="1">Peraturan dan Ketentuan I</option>
                        <option value="2">Peraturan dan Ketentuan II</option>
                        <option value="3">Peraturan dan Ketentuan III</option>
                        <option value="4">Peraturan dan Ketentuan IV</option>
                        <option value="5">Tindakan dan Hak I</option>
                        <option value="6">Tindakan dan Hak II</option>
                        <option value="7">Tindakan dan Hak III</option>
                        <option value="8">Sanksi I</option>
                        <option value="9">Sanksi II</option>
                        </>}
                        {pasal == 2 && 
                        <>
                        <option value="1">Peraturan dan Ketentuan I</option>
                        <option value="2">Peraturan dan Ketentuan II</option>
                        <option value="3">Peraturan dan Ketentuan III</option>
                        <option value="4">Peraturan dan Ketentuan IV</option>
                        <option value="5">Tindakan dan Hak I</option>
                        <option value="6">Tindakan dan Hak II</option>
                        <option value="7">Tindakan dan Hak III</option>
                        <option value="8">Sanksi I</option>
                        <option value="9">Sanksi II</option>
                        </>}
                    </select>
                    <button onClick={nextPage} className='py-1 px-3  rounded-xl body  bg-[#11283D] text-white border-2 border-sky-500'>&rarr;</button>
                    </div>
                    {pasal == 1 &&
                    <>
                        <button
            className="batman border-4 border-[#96D8E4] text-white text-xl mt-5 lg:text-3xl px-20 py-5 buttonColor"
            onClick={() => {
              const fileUrl =
                '/uploads/Peraturan Rektor Cup 2025.pdf'; // Replace with your actual file path
              const link = document.createElement('a');
              link.href = fileUrl;
              link.download =
                'Peraturan Rektor Cup 2025.pdf'; // Name the file as it will appear after download
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download
            <br />
            Rulebook
          </button>
                    </>
                    }
                    {pasal == 2  &&
                    <>
                        <button
            className="batman border-4 border-[#96D8E4] text-white text-xl mt-5 lg:text-3xl px-20 py-5 buttonColor"
            onClick={() => {
              const fileUrl =
                '/uploads/Peraturan UC Champions 2025.pdf'; // Replace with your actual file path
              const link = document.createElement('a');
              link.href = fileUrl;
              link.download =
                'Peraturan UC Champions 2025.pdf'; // Name the file as it will appear after download
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download
            <br />
            Rulebook
          </button>
                    </>
                    }



                </div>
                
                <div className='h-full w-full  absolute'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="1374" height="3085" viewBox="0 0 1374 3085" className='absolute left-0' fill="none">
                        <g filter="url(#filter0_f_809_1669)">
                            <path d="M374 1542.5C374 1842.11 126.413 2085 -179 2085C-484.413 2085 -732 1842.11 -732 1542.5C-732 1242.89 -484.413 1000 -179 1000C126.413 1000 374 1242.89 374 1542.5Z" fill="#07649D" />
                        </g>
                        <defs>
                            <filter id="filter0_f_809_1669" x="-1732" y="0" width="3106" height="3085" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_1669" />
                            </filter>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="5217" viewBox="0 0 1440 5217" className='absolute right-0 top-20' fill="none">
                        <g filter="url(#filter0_f_809_149)">
                            <path d="M2037 2608.5C2037 3496.85 1755.16 4217 1407.5 4217C1059.84 4217 778 3496.85 778 2608.5C778 1720.15 1059.84 1000 1407.5 1000C1755.16 1000 2037 1720.15 2037 2608.5Z" fill="#380855" />
                        </g>
                        <defs>
                            <filter id="filter0_f_809_149" x="-222" y="0" width="3259" height="5217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_149" />
                            </filter>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="4817" viewBox="0 0 1440 4817" className='absolute left-0 top-[50%] w-screen' fill="none">
                        <g filter="url(#filter0_f_809_684)">
                            <path d="M1055 2519.5C1055 3358.7 741.375 4039 354.5 4039C-32.3755 4039 -346 3358.7 -346 2519.5C-346 1680.3 -32.3755 1000 354.5 1000C741.375 1000 1055 1680.3 1055 2519.5Z" fill="#07649D" fill-opacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_809_684" x="-1346" y="0" width="3401" height="5039" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_809_684" />
                            </filter>
                        </defs>
                    </svg>
                    <img src={RuleBottomFloor} alt="" className='absolute w-[100vw] bottom-[-15%]'/>
                    <img src={HologramSpin} className='absolute w-[20vw] h-[20vw] top-30 left-[5%] opacity-10' alt="" />
                    <img src={HologramSpin} className='absolute w-[40vw] h-[40vw] top-0 right-[-15%] opacity-10' alt="" />

                </div>
            </div>

        </div>
    )
}

export default Rules
