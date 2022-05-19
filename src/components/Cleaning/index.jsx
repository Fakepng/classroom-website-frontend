import Table from "react-bootstrap/Table";

const Cleaning = () => {
	return (
		<Table
			striped
			bordered
			hover
			responsive
			style={{
				maxWidth: "60%",
				margin: "auto",
				textAlign: "center",
				verticalAlign: "middle",
			}}
		>
			<thead>
				<tr>
					<th>Monday</th>
					<th>Tuesday</th>
					<th>Wednesday</th>
					<th>Thursday</th>
					<th>Friday</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>รัตตภูมิ จั๋ง</td>
					<td>ปุณณิชญา อิงค์ซ่า</td>
					<td>รณพีร์ ปู๊น</td>
					<td>ภากร โฟโต้</td>
					<td>ณัฐณิชา ปริม</td>
				</tr>
				<tr>
					<td>พลกฤต พล</td>
					<td>ปาลิดา แป้ง</td>
					<td>รักตาภา แพน</td>
					<td>จิรัฏฐ์ หยาง</td>
					<td>ณัฐชุตา นัท</td>
				</tr>
				<tr>
					<td>ชยุด โอ๊ค</td>
					<td>ณัฐนันท์ นัน</td>
					<td>เขมจิรา แอล</td>
					<td>นัทธี อุลตร้า</td>
					<td>ปลายฟ้า เพ่ยเพ่ย</td>
				</tr>
				<tr>
					<td>พศิน รีเจนท์</td>
					<td>วรนาถ ดรีม</td>
					<td>กัลยกร ตัง</td>
					<td>รัชพนธ์ ปอนด์</td>
					<td>ณัฐกฤตา เกรซ</td>
				</tr>
				<tr>
					<td>พศุ ไท</td>
					<td>กิ่งกนก กิ่ง</td>
					<td>นวิน วิน</td>
					<td>เศรษฐธรรศ ชิริว</td>
					<td>ชนันชิดา อิง</td>
				</tr>
				<tr>
					<td>กฤษณ์ กฤษณ์</td>
					<td>ขุนพล ขุนพล</td>
					<td>นันท์นภัส นิ้ง</td>
					<td>คุณากร ทิมมี่</td>
					<td>ศุภวิชญ์ คิว</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td>ธันวา คอปเต้อ</td>
					<td>อัครพัชร์ กอล์ฟ</td>
					<td></td>
				</tr>
			</tbody>
		</Table>
	);
};

export default Cleaning;
