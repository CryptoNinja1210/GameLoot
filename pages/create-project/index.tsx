/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useFormik } from 'formik';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { MdAssignment, MdBrush, MdCategory, MdCloudUpload, MdDelete, MdDiscount, MdFileUpload, MdListAlt } from "react-icons/md";
import styled from "styled-components";
import Input from "../../components/common/Input";
import Switch from "../../components/common/Switch";
import Textarea from "../../components/common/Textarea";
import Collection_dropdown2 from "../../components/dropdown/collection_dropdown2";
import PageContainer from "../../components/layout/PageContainer";
import { AchievementElement } from "../../components/create-project/achivement-element";
import { upload } from '../../lib/api/fileAPIs'
import { saveGames, updateGame } from '../../lib/api/gameAPIs'
import { saveAchis, updateAchievements } from '../../lib/api/achivementAPIs'
import {
  GAME_CATEGORIES,
  AGE_LIST
} from "../../lib/constants/base";

const fileTypes = [
  "JPG",
  "PNG",
  "GIF",
  "SVG",
  "MP4",
  "WEBM",
  "MP3",
  "WAV",
  "OGG",
  "GLB",
  "GLTF",
];

export default function CreateProjectPage() {
  const [achievements, setAchievements] = useState([{ name: '', desc: '', url: '', file: '' }]);
  const [coverArtFile, setCoverArtFile] = useState()
  const [projectFile, setProjectFile] = useState()
  const [isloading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      title: '',
      coverArtUrl: '',
      summary: '',
      desc: '',
      projectUrl: '',
      category: '',
      tags: [],
      rating: '',
      mobile: false,
      comments: false,
      externalLink: ''
    },
    onSubmit: async values => {
      console.log(values);
    },
  });

  const UploadFile = ({ setFieldValue, fieldName, classes }) => {
    async function handleChange(file: any) {
      // const path = await upload(file, `${fieldName}/${currentDateTime}`)
      // console.log('upload', path)
      // let url = ''
      // if (path) {
      //   url = process.env.NEXT_PUBLIC_SUPABASE_URL + path
      // } else {
      //   url = URL.createObjectURL(file)
      // }
      // Call the setFieldValue function to update the form state
      if (fieldName == 'coverArtUrl') {
        setCoverArtFile(file)
      } else {
        setProjectFile(file)
      }
      let url = URL.createObjectURL(file)
      setFieldValue(fieldName, url);
    }

    return (
      <FileUploader
        handleChange={handleChange}
        name="cover"
        types={fileTypes}
        classes={classes}
        maxSize={100}
        minSize={0}
      />
    )
  }

  const handleChangeAchievementIcon = async (file: any, i: number) => {
    // const path = await upload(file, `achievement_icons/${i}`)
    // console.log('upload', path)
    let url = URL.createObjectURL(file)

    let all = [...achievements]
    let select = all[i]
    select.url = url
    select.file = file
    setAchievements(all)
  }

  const achievementNameChange = (i: number, val: string) => {
    console.log('name', i, val)
    let all = [...achievements]
    let select = all[i]
    select.name = val
    setAchievements(all)
  }

  // TODO - rename, add correct type instead of any
  const achievementDescriptionChange = (i: number, val: string) => {
    console.log('desc', i, val)
    let all = [...achievements]
    let select = all[i]
    select.desc = val
    setAchievements(all)
  }

  const addAchievement = () => {
    console.log('ach')
    let all = [...achievements, { name: '', desc: '', file: '', url: '' }]
    setAchievements(all)
  }

  const deleteAchievement = (i: number) => {
    console.log('del', i)
    const all = [...achievements].filter((v, j) => j !== i)
    setAchievements(all)
  }

  const createProject = async () => {
    const data0 = {
      gameName: formik.values.title,
      category: formik.values.category,
      description: formik.values.desc,
      thumbnailUrl: formik.values.coverArtUrl,
      age_content_rating: formik.values.rating,
      contents_enabled: formik.values.comments,
      cover_art: formik.values.coverArtUrl,
      external_site: formik.values.externalLink,
      mobile_support: formik.values.mobile,
      project_files: formik.values.projectUrl,
      summary: formik.values.summary,
      tags: JSON.stringify(formik.values.tags),
    }
    setLoading(true)
    const { data, error } = await saveGames(data0);
    if (!error) {
      const gameId = data[0].id
      updateProduct(gameId)
      saveAchievements(gameId)
    } else {
      console.log(error)
      setLoading(false);
    }
  }

  const updateProduct = async (id: string) => {
    const coverArtUrl = uploadCoverArtFile(id)
    const projectUrl = uploadProjectFile(id)
    const data0 = {
      thumbnailUrl: coverArtUrl,
      cover_art: coverArtUrl,
      project_files: projectUrl,
    }

    const { data } = await updateGame(id, data0)
    console.log(data)
  }

  const uploadCoverArtFile = async (id: string) => {
    const path = await upload(coverArtFile, `cover_arts/${id}`)
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + path
    return url
  }

  const uploadProjectFile = async (id: string) => {
    const path = await upload(projectFile, `game_files/${id}`)
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL + path
    return url
  }

  const saveAchievements = async (id: string) => {
    const { data, error } = await saveAchis(achievements, id)
    if (!error) {
      updateAchievements0(data, achievements)
    }
  }

  const updateAchievements0 = async (data: any[], achievements) => {
    let newData = []
    data.map(async (item: { file: any; id: string; url: string; }, i) => {
      const path = await upload(achievements[i].file, `achievement_icons/${item.id}`);
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL + path;
      newData = [...newData, { id: item.id, iconUrl: url }]
    })

    const state = updateAchievements(newData)

    if (state) {
      clearState()
      setLoading(false)
    }
  }

  const clearState = () => {
    setAchievements([{ name: '', desc: '', url: '', file: '' }])
    formik.resetForm()
  }

  return (
    <PageContainer>
      <div className="text-center text-[36px] font-bold">
        Create Project
      </div>

      {/* ===== Body ===== */}
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-7">
          <div className="flex gap-7">
            <div className="flex flex-col gap-7 w-full">
              <div className="flex-1">
                <StyledLabel htmlFor="title">
                  <MdListAlt />
                  Title
                </StyledLabel>
                <Input placeholder="Project Name" id="title" name='title' onChange={formik.handleChange} value={formik.values.title} />
              </div>
              <div className="flex-1">
                <StyledLabel htmlFor="summary">
                  <MdAssignment />
                  Game Summary
                </StyledLabel>
                <Textarea placeholder="Short description of the game" id="summary" name='summary' rows={3} onChange={formik.handleChange} value={formik.values.summary} />
              </div>
            </div>

            <div className="w-[300px] flex flex-col gap-4">
              <StyledLabel>
                <MdBrush />
                Cover Art
              </StyledLabel>
              <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center">
                <div className="relative z-10 cursor-pointer">
                  {formik.values.coverArtUrl !== '' ? <img src={formik.values.coverArtUrl} className="z-2" /> :
                    <>
                      <MdFileUpload className="mx-auto text-[24px]" />
                      <p className="dark:text-jacarta-300 mx-auto max-w-xs text-xs">
                        JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max
                        size: 100 MB
                      </p>
                    </>
                  }
                </div>
                <div className="dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100 ">
                  <UploadFile setFieldValue={formik.setFieldValue} fieldName='coverArtUrl' classes='file-drag' />
                </div>
              </div>
            </div>
          </div>

          <div>
            <StyledLabel htmlFor="description">
              <MdAssignment />
              Description
            </StyledLabel>
            <StyledCaption>
              The Description Will Be Included On The Projects Detail Page Underneath the game. Markdown Syntax is Supported
            </StyledCaption>
            <Textarea placeholder="Provide A Detailed Description Of Your Item" id="description" name='desc' rows={5} onChange={formik.handleChange} value={formik.values.desc} />
          </div>

          <div>
            <StyledLabel htmlFor="description">
              <MdCloudUpload />
              Project Files
            </StyledLabel>
            <StyledCaption>
              Drag Or Choose Your File To Upload
            </StyledCaption>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center">
              <div className="relative z-10 cursor-pointer">
                {formik.values.projectUrl !== '' ? <img src={formik.values.projectUrl} className="z-2" /> :
                  <>
                    <MdFileUpload className="mx-auto text-[24px]" />
                    <p className="dark:text-jacarta-300 mx-auto max-w-xs text-xs">
                      JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max
                      size: 100 MB
                    </p>
                  </>
                }
              </div>
              <div className="dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100">
                <UploadFile setFieldValue={formik.setFieldValue} fieldName='projectUrl' classes='file-drag m-auto' />
              </div>
            </div>
          </div>

          <div>
            <StyledLabel htmlFor="category">
              <MdCategory />
              Category
            </StyledLabel>
            <StyledCaption>
              Select the category that best describes your game. You can pick additional genres with tags below
            </StyledCaption>
            <div className="dropdown my-1 cursor-pointer">
              <Collection_dropdown2
                data={GAME_CATEGORIES}
                collection={true}
                value={formik.values.category}
                name='category'
                // select={(i: string | number) => setCategory(GAME_CATEGORIES[i].text)}
                select={(i: number) => { formik.setFieldValue('category', GAME_CATEGORIES[i].text) }}
              />
            </div>
          </div>

          <div>
            <StyledLabel htmlFor="tags">
              <MdDiscount />
              Tags
            </StyledLabel>
            <StyledCaption>
              Add Tags to help players find your game
            </StyledCaption>
            <Input placeholder="Enter Tag" id="tags" onKeyDown={(e: any) => {
              if (e.keyCode == 13) {
                const val = [...formik.values.tags, e.target.value]
                formik.setFieldValue('tags', val)
                e.target.value = ''
              }
            }} />
            <div className=" flex w-full flex-wrap mt-3">
              {
                formik.values.tags.map((item) =>
                  <>
                    <div className=" border-2 border-[#6336E4] rounded-full px-8 py-1 m-2">{item}</div>
                  </>
                )
              }
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <StyledLabel>
                Achievement
              </StyledLabel>
              <button
                onClick={addAchievement}
                className="group dark:bg-jacarta-700 hover:bg-accent border-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-white hover:border-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-accent group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                </svg>
              </button>
            </div>

            {achievements.map((data, i) => (
              AchievementElement(i, data, handleChangeAchievementIcon, achievementNameChange, achievementDescriptionChange, deleteAchievement)
            ))}
          </div>

          <div>
            <StyledLabel>
              Age Content Rating
            </StyledLabel>
            <StyledCaption>
              Select the category that best describes your game. You can pick additional genres with tags below
            </StyledCaption>
            <div className="dropdown my-1 cursor-pointer">
              <Collection_dropdown2
                data={AGE_LIST}
                collection={true}
                value={formik.values.rating}
                name='rating'
                // select={(i: string | number) => setRating(AGE_LIST[i].text)}
                select={(i: number) => { formik.setFieldValue('rating', AGE_LIST[i].text) }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <StyledLabel>
                Mobile Supported
              </StyledLabel>
              <StyledCaption>
                Disabled will hide the game from mobile users
              </StyledCaption>
            </div>
            <Switch checked={formik.values.mobile} onClick={() => { formik.setFieldValue('mobile', !formik.values.mobile) }} />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <StyledLabel>
                Comments Enabled
              </StyledLabel>
              <StyledCaption>
                Select the category that best describes your game. You can pick additional genres with tags below
              </StyledCaption>
            </div>
            <Switch checked={formik.values.comments} onClick={() => { formik.setFieldValue('comments', !formik.values.comments) }} />
          </div>

          <div>
            <StyledLabel htmlFor="externalLink">
              External Link
            </StyledLabel>
            <StyledCaption>
              {"We Will Include A Link To This URL On This Item's Detail Page, So That Users Can Click To Learn More About It. You Are Welcome To Link To Your Own Webpage With More Details."}
            </StyledCaption>
            <Input placeholder="https://Yoursite.io/item/123" id="externalLink" name='externalLink' value={formik.values.externalLink} onChange={formik.handleChange} />
          </div>
        </div>
        <div className=" mt-16">
          <button className=" float-right py-3 px-9 bg-[#6336E4] text-white rounded-full" onClick={createProject} type="submit" disabled={isloading} >
            {isloading ? 'Saving...' : ' Create'}
          </button>
        </div>
      </form>
    </PageContainer>
  )
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`

const StyledCaption = styled.div`
  color: #808191;
  font-size: '15px';
  line-height: '26px';
  margin-bottom: 8px;
`