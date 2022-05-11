import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { stringAvatar } from "./../utils/avatarUtils";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { UserRequest } from "./../utils/api";
const HomeBox = styled.div`
  width: 70vw;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr 1fr 1fr;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    width: 80vw;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardBox = styled.div`
  padding: 8px;
  cursor: pointer;
`;

const TitleCardBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SubtitleCardBox = styled.div`
  padding: 8px;
`;

export default function Home() {
  const [response, loading, hasError] = UserRequest();
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : response ? (
        <div>
          <>
            <HomeBox>
              {response.map((data) => (
                <Card variant="outlined">
                  <CardBox onClick={() => navigate(`/user/${data.id}`)}>
                    <CardContent>
                      <TitleCardBox>
                        <Avatar {...stringAvatar(data.name)} />
                        <Typography variant="h5" component="div">
                          {data.name}
                        </Typography>
                      </TitleCardBox>
                      <SubtitleCardBox>
                        <Typography variant="h6" color="text.secondary">
                          {data.company.name}
                        </Typography>
                      </SubtitleCardBox>
                    </CardContent>
                  </CardBox>
                </Card>
              ))}
            </HomeBox>
          </>
        </div>
      ) : (
        <>{hasError}</>
      )}
    </>
  );
}
